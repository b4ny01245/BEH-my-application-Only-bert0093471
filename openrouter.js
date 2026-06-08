// Talk to OpenRouter API
import { CONFIG } from "../config.js";

export class BEHChat {
  async chat(messages, systemPrompt = null) {
    const fullMessages = systemPrompt
      ? [{ role: "system", content: systemPrompt }, ...messages]
      : messages;

    try {
      const response = await fetch(CONFIG.OPENROUTER_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${CONFIG.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "BEH - Your AI Companion"
        },
        body: JSON.stringify({
          model: CONFIG.DEFAULT_MODEL,
          messages: fullMessages,
          temperature: 0.7,
          max_tokens: 1000,
          top_p: 0.9
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || "API Error");
      }

      const data = await response.json();
      return {
        content: data.choices[0].message.content,
        tokens: data.usage.total_tokens,
        model: CONFIG.DEFAULT_MODEL
      };
    } catch (error) {
      console.error("Chat error:", error);
      throw error;
    }
  }
}

export const behChat = new BEHChat();
