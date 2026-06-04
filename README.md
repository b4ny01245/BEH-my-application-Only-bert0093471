# BEH Solo - Your AI Second Brain

A personal AI companion built in pure HTML/CSS/JavaScript. No authentication. No signup. Just you and BEH.

## 🚀 Quick Start (5 minutes)

### 1. Get OpenRouter API Key
- Go to https://openrouter.io
- Sign up (free)
- Create API key
- Add $1-5 credit
- Copy your API key

### 2. Add API Key
- Open `config.js`
- Replace `YOUR_API_KEY_HERE` with your actual OpenRouter API key
- Save

### 3. Start Local Server

**Option A: Python (built-in)**
```bash
python -m http.server 8000
```

**Option B: Node.js (if you have it)**
```bash
npx http-server
```

### 4. Open in Browser
Visit `http://localhost:8000` and start chatting!

---

## 📁 Project Structure

```
beh-solo/
├── index.html          # Home/Dashboard
├── chat.html           # Chat interface
├── memory.html         # Profile editor
├── config.js           # Configuration (add API key here!)
├── package.json        # Project metadata
├── css/
│   ├── global.css      # Global styles
│   └── chat.css        # Chat page styles
├── js/
│   ├── app.js          # Chat logic
│   ├── db.js           # Local database (IndexedDB)
│   └── openrouter.js   # AI API integration
└── README.md           # This file
```

---

## 🎯 How It Works

1. **All data is stored locally** in your browser (IndexedDB)
2. **No server required** - it's a static site
3. **Talks to OpenRouter API** for AI responses
4. **Zero authentication** - just open and use
5. **Private** - your data stays on your device

---

## 💻 Features

✅ **Chat Interface** - Talk to BEH anytime  
✅ **Memory System** - Set your profile (goals, projects, skills)  
✅ **Reflections** - Daily mood, focus, energy tracking  
✅ **Personalization** - BEH learns your patterns  
✅ **Local Storage** - Everything saved in browser  
✅ **Offline Capable** - Works without internet (with Service Worker)  
✅ **Mobile Friendly** - Responsive design  
✅ **Dark Theme** - Easy on the eyes  

---

## 🔧 Configuration

Edit `config.js`:

```javascript
export const CONFIG = {
  OPENROUTER_API_KEY: "YOUR_KEY",  // Add your key here
  OPENROUTER_URL: "https://openrouter.io/api/v1/chat/completions",
  DEFAULT_MODEL: "claude-3-haiku",  // Fast & cheap
  DB_NAME: "BEH",
  MAX_CONTEXT_MESSAGES: 10
};
```

---

## 📊 Pages

### 🏠 Home (index.html)
- Daily mood, focus, energy tracking
- Save reflections
- Quick links to other pages

### 💬 Chat (chat.html)
- Talk to BEH
- View conversation history
- AI responds based on your profile

### 👤 Profile (memory.html)
- Set your name
- Add goals
- List projects
- Share skills
- BEH uses this for personalization

---

## 🤖 AI Models (All Cheap)

Available in OpenRouter:

| Model | Speed | Cost | Best For |
|-------|-------|------|----------|
| `claude-3-haiku` | Fast | $0.00025/msg | General chat |
| `gpt-3.5-turbo` | Very Fast | $0.0001/msg | Quick responses |
| `deepseek-chat` | Fast | Ultra cheap | Budget |

Change in `config.js`:

```javascript
DEFAULT_MODEL: "gpt-3.5-turbo"  // or any OpenRouter model
```

---

## 💾 Data Storage

All your data is stored locally in IndexedDB:

- **messages** - Chat history
- **memory** - Your profile (facts)
- **reflections** - Mood/focus/energy tracking
- **tasks** - Task list (future)
- **notes** - Notes (future)

**No cloud sync** - purely local. If you want backup, use browser DevTools to export.

---

## 🚀 Deploy (Optional)

Want to access from any device? Deploy to Vercel/Netlify (free):

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
Drag & drop folder on `netlify.com`

---

## ❓ Troubleshooting

### "API Key not working"
- Check you added credit to OpenRouter
- Verify key in `config.js`
- Check browser console for errors

### "Chat not responding"
- Open DevTools (F12) → Network tab
- Check if API request is being sent
- Look for error messages in Console

### "Data not saving"
- Open DevTools → Application → IndexedDB
- Check if "BEH" database exists
- Try opening chat.html to initialize

### "Page not loading"
- Make sure you're running a local server
- `file://` URLs won't work
- Use `http://localhost:8000` not `file://`

---

## 🔐 Privacy

✅ **Your data stays on your device**  
✅ **No accounts or passwords**  
✅ **No tracking or analytics**  
✅ **No cloud storage** (unless you deploy)  
✅ **Only OpenRouter API key sent to external servers**  

---

## 📝 Next Steps

### Day 1-2
- Set your profile
- Chat with BEH
- Track reflections

### Day 3-4
- Let BEH learn your patterns
- Notice personalized responses
- Continue conversations

### Day 5+
- Deploy to Vercel/Netlify
- Access from any device
- Share with friends (or keep private!)

---

## 🎉 You're Ready!

1. **Add OpenRouter key to `config.js`**
2. **Run local server** (`python -m http.server 8000`)
3. **Open `http://localhost:8000`**
4. **Start chatting!**

That's it. You now have your own AI companion. 🧠✨

---

## 🤝 Support

- **OpenRouter Docs**: https://openrouter.io/docs
- **IndexedDB Guide**: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
- **Deploy Help**: Check Vercel/Netlify docs

---

## 📄 License

MIT - Use however you want!

---

Built with ❤️ for you. Your AI companion is ready.

**Now go build something amazing.** 🚀
