# Veil – A Lightweight Privacy Browser

**Veil** is a minimal Chromium-based desktop browser built with **Electron**, **React** and **Vite**. It focuses on privacy, speed, and simplicity — without accounts, telemetry, or tracking.

## 🚀 Features

- ✅ Lightweight UI with React & Vite
- 🔐 No telemetry, no Google services, no tracking
- 🌐 Embedded Chromium rendering via Electron
- 🔎 Custom address bar and navigation
- 💻 Fully local, no cloud dependencies
- 🧱 Modular architecture (React components + Electron backend)

## 📁 Project Structure

```

veil/
├── main/                 # Electron main & preload scripts
│   ├── main.ts
│   └── preload.ts
├── src/                  # React frontend (Vite)
│   ├── App.tsx
│   └── ...
├── public/
│   └── index.html
├── dist/                 # Compiled Electron output
├── tsconfig.node.json    # TS config for Electron code
├── vite.config.ts        # Vite config for React frontend
└── package.json

```

## 🛠️ Development

### 1. Install dependencies

```bash
npm install
```

### 2. Start Vite frontend (React)

```bash
npm run dev
```

### 3. In a second terminal: compile Electron code and launch the app

```bash
npm run electron
```

## 📦 Build (WIP)

Production builds can be created with a bundler like `electron-builder` or `vite-plugin-electron`. (Not yet included.)

## 🔐 Privacy Philosophy

Veil aims to be:

- 🚫 Account-free
- 🚫 Telemetry-free
- 🚫 Sync-free
- ✅ Local-first
- ✅ Hackable and open

## 🧪 Planned Features

- [ ] Tab management
- [ ] Bookmark system
- [ ] Built-in content blocker
- [ ] Custom homepage
- [ ] History storage (local only)

## 📜 License

MIT © 2025 \[Sebastian Falter]
