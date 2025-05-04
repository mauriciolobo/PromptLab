# electron-app

A minimal Electron application with JavaScript, Electron, and Tailwind CSS.

![App Sample Screenshot](./assets/image.png)

## Features

- Electron app with secure preload and main/renderer separation
- Uses [electron-vite](https://electron-vite.org/) for fast development and builds
- Integrated [Tailwind CSS](https://tailwindcss.com/) for styling
- [Groq SDK](https://www.npmjs.com/package/groq-sdk) integration for AI chat completions
- Environment variable support via `.env`
- Pre-configured ESLint and Prettier for code quality
- Cross-platform build scripts (Windows, macOS, Linux)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Structure

- `src/main/` – Electron main process code
- `src/preload/` – Preload scripts (secure API exposure)
- `src/renderer/` – Renderer process (UI, assets, HTML, JS)
- `resources/` – App icons and static resources
- `.env` – Environment variables (see `.sample.env` for template)

## Project Setup

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
# For Windows
npm run build:win

# For macOS
npm run build:mac

# For Linux
npm run build:linux
```

## Environment Variables

Copy `.sample.env` to `.env` and add your Groq API key:

```env
GROQ_API_KEY=YOUR_API_KEY
```

## Usage

- Start the app with `npm run dev`.
- Enter your Groq API key and prompts in the UI.
- The app uses the Groq API to generate AI completions.

## Linting & Formatting

```bash
npm run lint
npm run format
```

## License

MIT
