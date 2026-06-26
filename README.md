# 🧠 BEH Solo — Your AI Second Brain

> **A private AI-powered personal companion designed to act as a second brain for organizing thoughts, remembering important information, reflecting on daily life, and providing personalized conversations.**

![Status](https://img.shields.io/badge/Status-Personal%20Project-success)
![Platform](https://img.shields.io/badge/Platform-Web-blue)
![Storage](https://img.shields.io/badge/Storage-IndexedDB-orange)
![AI](https://img.shields.io/badge/AI-OpenRouter-purple)
![License](https://img.shields.io/badge/License-Proprietary-red)

---

# 📖 About

**BEH Solo** is a browser-based AI companion built entirely with **HTML, CSS, and Vanilla JavaScript**.

Unlike traditional AI chat applications, BEH Solo is designed to become a **personal second brain**, allowing users to keep conversations, memories, reflections, goals, and personal information stored locally inside the browser while using modern Large Language Models through the OpenRouter API.

No authentication, user accounts, or backend servers are required.

Everything except AI responses remains on your own device.

---

# ✨ Features

## 🤖 AI Companion

* Personalized AI conversations
* Context-aware responses
* Learns from your stored memories
* Uses OpenRouter-compatible models

---

## 🧠 Memory System

Store personal information such as:

* Goals
* Skills
* Projects
* Preferences
* Personal facts

The AI references this information to provide more relevant responses over time.

---

## 💬 Persistent Chat

* Conversation history
* Context retention
* Fast AI responses
* Simple chat interface

---

## 📓 Daily Reflections

Track your daily:

* Mood
* Focus
* Energy

Build a personal reflection journal that the AI can use for future conversations.

---

## 💾 Local-First Design

All personal information is stored locally using **IndexedDB**.

No cloud database is required.

---

## 📱 Responsive Design

Designed to work on:

* Desktop
* Tablet
* Mobile browsers

---

## 🌐 Progressive Web App Ready

Supports installation on supported browsers with offline functionality through Service Workers.

---

# 💻 Built With

* HTML5
* CSS3
* JavaScript (Vanilla)
* IndexedDB
* OpenRouter API
* Service Workers
* Progressive Web App (PWA)

---

# 📂 Project Structure

```text
beh-solo/
│
├── index.html
├── chat.html
├── memory.html
├── config.js
├── package.json
│
├── css/
│   ├── global.css
│   └── chat.css
│
├── js/
│   ├── app.js
│   ├── db.js
│   └── openrouter.js
│
└── README.md
```

---

# 🚀 Getting Started

## 1. Obtain an OpenRouter API Key

1. Create an account on **OpenRouter**
2. Generate an API key
3. Add credits if required
4. Copy your API key

---

## 2. Configure the Application

Open:

```text
config.js
```

Replace:

```javascript
OPENROUTER_API_KEY: "YOUR_API_KEY_HERE"
```

with your own API key.

---

## 3. Run a Local Server

Python

```bash
python -m http.server 8000
```

or Node.js

```bash
npx http-server
```

---

## 4. Open the Application

Visit:

```
http://localhost:8000
```

and begin chatting with BEH.

---

# 🤖 Supported AI Models

Any model supported by OpenRouter can be used.

Popular choices include:

* Claude
* GPT
* Gemini
* DeepSeek
* Mistral
* Qwen
* Llama

Simply change the model inside:

```text
config.js
```

---

# 💾 Data Storage

BEH Solo stores data locally using IndexedDB.

Current storage includes:

* Chat history
* Personal memories
* Reflections
* User profile
* Future notes
* Future task management

The public version does **not** include cloud synchronization.

---

# 🔐 Privacy

Privacy is one of the project's primary goals.

* No user accounts
* No authentication
* No tracking
* No analytics
* No cloud database

Only AI requests are sent securely to the configured OpenRouter model.

Personal data remains inside your browser.

---

# 🎯 Project Purpose

BEH Solo was created to explore how modern AI can become a personalized digital companion rather than simply a chatbot.

The project demonstrates:

* AI integration
* Browser-based databases
* Prompt engineering
* Local-first architecture
* Progressive Web Apps
* Responsive frontend development
* Vanilla JavaScript application architecture

---

# ⚠️ Important Notice

## Personal AI Companion

BEH Solo was originally developed as a **personal AI assistant** for the developer.

The memory structure, prompts, conversation style, reflection system, and overall workflow are based on the developer's own preferences and experimentation.

Although anyone may explore the project, it was **not originally designed as a commercial AI assistant or universal productivity platform**.

If you wish to adapt it for your own use, you are encouraged to customize the prompts, memory structure, and workflow according to your own needs.

---

# 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, distribute, and build upon this software, provided that the original copyright notice and license are included in all copies or substantial portions of the Software.

See the `LICENSE` file for the full license text.

---

# 📜 Copyright

Copyright © 2026 b4ny01245.

Released under the MIT License.
---

# ⚠️ Disclaimer

BEH Solo is a personal project created primarily for experimentation with browser-based AI applications and as a portfolio demonstration.

---

# 👩‍💻 Developer

Developed and maintained by **b4ny01245**.

Created as a personal AI companion and portfolio project to explore local-first web applications, AI integration, and modern frontend development.
