// Main chat logic
import { db } from "./db.js";
import { behChat } from "./openrouter.js";

class ChatApp {
  constructor() {
    this.messages = [];
    this.isLoading = false;
  }

  async init() {
    await db.init();
    this.setupEventListeners();
    await this.loadMessages();
    console.log("✅ Chat app ready");
  }

  setupEventListeners() {
    const sendBtn = document.getElementById("sendBtn");
    const input = document.getElementById("messageInput");
    const clearBtn = document.getElementById("clearChatBtn");

    if (sendBtn) {
      sendBtn.addEventListener("click", () => this.sendMessage());
    }
    
    if (input) {
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          this.sendMessage();
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => this.clearChat());
    }
  }

  async sendMessage() {
    if (this.isLoading) return;

    const input = document.getElementById("messageInput");
    const userMessage = input.value.trim();

    if (!userMessage) return;

    this.isLoading = true;

    // Save and display user message
    await db.addMessage({ sender: "user", content: userMessage });
    this.displayMessage(userMessage, "user");
    input.value = "";

    try {
      // Show typing
      this.showTyping();

      // Get AI response
      const aiResponse = await behChat.chat(
        this.messages.map(m => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.content
        }))
      );

      // Remove typing
      this.hideTyping();

      // Save and display AI response
      await db.addMessage({ sender: "beh", content: aiResponse.content });
      this.displayMessage(aiResponse.content, "beh");

      // Update messages
      this.messages.push(
        { sender: "user", content: userMessage },
        { sender: "beh", content: aiResponse.content }
      );

    } catch (error) {
      this.hideTyping();
      console.error("Error:", error);
      this.displayMessage("Sorry, something went wrong: " + error.message, "beh");
    }

    this.isLoading = false;
  }

  async loadMessages() {
    const messages = await db.getMessages();
    this.messages = messages;

    const container = document.getElementById("messagesContainer");
    if (!container) return;

    container.innerHTML = "";

    if (messages.length === 0) {
      this.displayMessage("Hey! What's on your mind?", "beh");
    } else {
      for (const msg of messages) {
        this.displayMessage(msg.content, msg.sender);
      }
    }
  }

  displayMessage(content, sender) {
    const container = document.getElementById("messagesContainer");
    if (!container) return;

    const div = document.createElement("div");
    div.className = `message message-${sender}`;
    div.innerHTML = `<p>${this.escapeHtml(content)}</p>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  showTyping() {
    const container = document.getElementById("messagesContainer");
    if (!container) return;

    const div = document.createElement("div");
    div.id = "typing";
    div.className = "message message-beh typing";
    div.innerHTML = '<p><span>.</span><span>.</span><span>.</span></p>';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  hideTyping() {
    const typing = document.getElementById("typing");
    if (typing) typing.remove();
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  async clearChat() {
    const confirmed = confirm("🗑️ Clear all chat messages?\n\nYour profile and reflections will be kept.");
    if (!confirmed) return;

    try {
      const container = document.getElementById("messagesContainer");
      if (!container) return;

      // Clear from database
      const tx = db.db.transaction("messages", "readwrite");
      tx.objectStore("messages").clear();

      // Clear from UI
      this.messages = [];
      this.displayMessage("Chat cleared! Starting fresh.", "beh");
    } catch (error) {
      console.error("Error clearing chat:", error);
      this.displayMessage("Error clearing chat", "beh");
    }
  }
}

// Initialize when page loads
const app = new ChatApp();
document.addEventListener("DOMContentLoaded", () => app.init());
