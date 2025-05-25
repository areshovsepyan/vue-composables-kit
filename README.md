<div align="center">
  
# Vue Composables Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
[![Edit on CodeSandbox](https://img.shields.io/badge/Live-Demo-blue?logo=codesandbox&logoColor=white)](https://codesandbox.io/p/sandbox/github/areshovsepyan/vue-composables-kit)
</div>

A growing collection of reusable Vue 3 composables written in TypeScript. Each composable is designed to solve common frontend problems with simplicity and performance — whether you're building SPAs, admin dashboards, or side projects.

🔹 Fully typed for better DX  
🔹 Lightweight and modular  
🔹 MIT licensed — free to use in personal or commercial projects

Looking for more? Upgrade to the **Pro Pack** for advanced composables, enhanced features, and lifetime updates.

---

## ✨ What's Included (Free)

✅ `useClipboard` – Copy text to clipboard  
✅ `useDarkMode` – Toggle dark mode with localStorage  
✅ `useDebounce` – Debounce a reactive value  
✅ `useWindowSize` – Reactive screen size tracking  
✅ `useEventListener` – Add/remove event listeners with cleanup

> New utilities added regularly. Follow or star the repo to stay updated.

---

## 🧠 Why Use This?

These composables follow Vue 3 best practices, work seamlessly with the Composition API, and are easy to integrate. Perfect for Vue developers who want to:

- Speed up project setup
- Avoid rewriting common logic
- Build modular, testable code

---

## 📦 Installation

Clone or fork this repo and use any composable like so:

```ts
import { useClipboard } from '@/composables/useClipboard'

const { copy, isSupported } = useClipboard()
copy('Hello world!')
```

> Note: This kit assumes you’re using Vue 3 with <script setup> and TypeScript.

---

## 🧪 Try It Locally

You can test the included composables in a local development environment using the built-in playground app.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

### 1. Clone the repository

```bash
git clone https://github.com/areshovsepyan/vue-composables-kit.git
cd vue-composables-kit
```

### 2. Install dependencies

```bash
npm install
```

### 3. Compile and Hot-Reload for Development

```bash
npm run dev
```

### 4. Type-Check, Compile and Minify for Production

```bash
npm run build
```

### 5. Lint with [ESLint](https://eslint.org/)

```bash
npm run lint
```

Visit http://localhost:5173 in your browser to explore the demo UI and see the composables in action.

---

## 🚀 Upgrade to the Pro Pack

The Pro Pack includes:

- 10+ advanced Vue composables (e.g., intersection observer, idle detection, breakpoints, device motion)
- Full TypeScript support and JSDocs
- Bonus utilities and examples
- Lifetime updates and commercial license

👉 [Buy Now on Gumroad →](https://gumroad.com/)

---

## 🛠 Tech Stack

- Vue 3 (Composition API)
- TypeScript
- Vite (for playground/demo)
- MIT License

---

## 📝 License

This free kit is open-source under the [MIT License](LICENSE).<br/>
You may use, modify, and distribute it freely.

A commercial license governs the Pro Pack and all paid add-ons. See Gumroad terms for details.

---

## 🙌 Credits & Contributions

Made with ❤️ by [Ara Hovsepyan](https://github.com/areshovsepyan).<br/>

PRs, feedback, and stars are always welcome!

---
