![React](https://img.shields.io/badge/react-18.2.0-blue?logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/typescript-5.0-blue?logo=typescript&logoColor=3178C6) ![Vite](https://img.shields.io/badge/vite-4.4.9-brightgreen?logo=vite) ![License](https://img.shields.io/badge/license-MIT-green)

# 🃏 MPBlackjack (React Rework)

A modern, modular, and web-friendly Blackjack game built with React, TypeScript, and Vite. This project reimagines the classic Blackjack experience with a clean UI, robust game logic, and a focus on maintainability.

---

## 📚 Background

Originally created for a university course ([old repo](https://github.com/PMBayer/MPBlackJack)), this version is a complete rewrite using React and TypeScript. The goal: a maintainable, testable, and visually appealing Blackjack game for the web.

---

## ⚙️ Tech Stack

- [React 18](https://reactjs.org/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Vite 4](https://vitejs.dev/) for lightning-fast dev/build
- Plain CSS & CSS Modules (no frameworks)
- [Jest](https://jestjs.io/) for unit testing

---

## 🏗️ Project Structure

```
mp-blackjack/
├── public/                # Static assets (card images, icons)
├── src/
│   ├── assets/            # App icons
│   ├── components/        # UI components (CardImage, GameBoard, etc.)
│   ├── hooks/             # Custom React hooks (useBlackjackGame)
│   ├── logic/             # Core game logic (BlackjackGame.ts)
│   ├── pages/             # Route-based pages (Solo, Multiplayer, Info)
│   ├── App.tsx            # Main app entry
│   └── index.css          # Global styles
├── package.json           # Project metadata & scripts
├── vite.config.ts         # Vite configuration
└── ...
```

---

## 🎮 Features

- **Classic Blackjack rules**: Hit, stand, bust, dealer logic, ace handling
- **Single-player & Local Multiplayer**: Play solo or with a friend on the same device
- **Modern UI**: Responsive, clean, and accessible
- **Card graphics**: Realistic card images for an authentic feel
- **Type-safe logic**: All core logic in TypeScript, with comprehensive unit tests
- **Extensible**: Modular codebase for easy feature addition

---

## 🛠️ Getting Started

### Requirements
- Node.js ≥ 18

### Setup

```bash
# Clone the repository
git clone https://github.com/PMBayer/mp-blackjack.git
cd mp-blackjack

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to play.

---

## 🧪 Testing

Unit tests cover all core game logic (see `src/logic/BlackjackGame.test.ts`).

```bash
npm test
```

---

## 📁 Assets

- All card images are in `public/assets/` and mapped to card values in the game logic.
- App icons and SVGs in `src/assets/`.

---

## 📄 License

MIT. See [LICENSE](LICENSE).

---

## 🙏 Credits

- Card images: [Byron Knoll (CC0)](https://code.google.com/archive/p/vector-playing-cards/)
- Original JS version: [PMBayer/MPBlackJack](https://github.com/PMBayer/MPBlackJack)
