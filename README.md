![React](https://img.shields.io/badge/react-18.2.0-blue?logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/typescript-5.0-blue?logo=typescript&logoColor=3178C6) ![Vite](https://img.shields.io/badge/vite-4.4.9-brightgreen?logo=vite) ![License](https://img.shields.io/badge/license-MIT-green) ![CI](https://github.com/PMBayer/pmb-blackjack-multiplayer/actions/workflows/pr-check.yaml/badge.svg)

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
- [MUI](https://mui.com/) for UI components
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
│   ├── logic/             # Game logic (BlackjackGame)
│   ├── pages/             # Page components (WelcomePage, InfoPage, etc.)
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── .github/               # GitHub workflows, dependabot, etc.
├── package.json           # Project metadata and scripts
├── tsconfig*.json         # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── README.md              # This file
└── ...
```

---

## 🚀 Usage

### Development

```sh
npm install
npm run dev
```

### Build

```sh
npm run build
```

### Test

```sh
npm test
```

### Lint

```sh
npm run lint
```

---

## 🤝 Contributing

1. Fork the repo and create your branch from `main`.
2. Run tests and lint before pushing.
3. Open a pull request and describe your changes.

---

## 📄 License

MIT

---

## 🙋 FAQ

- **How do I add a new game mode?**
  - Add a new page in `src/pages/` and route in `App.tsx`.
- **Where is the game logic?**
  - See `src/logic/BlackjackGame.ts`.
- **How do I run tests?**
  - `npm test` (see above).

---

## 🛠️ Maintainers

See [CODEOWNERS](.github/CODEOWNERS)
