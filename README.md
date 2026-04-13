

Follow these steps to run the project locally:

### 1. Clone the repository
 ``` 
git clone https://github.com/VirenSumbly/React-Quiz-roadmap.sh-.git
 ```

### 2. Navigate into the project directory
```
 cd React-Quiz-roadmap.sh-
```

### 3. Install dependencies
``` 
npm install
```

### 4. Start the development server
```
npm run dev
```

### 5. Open in browser

After running the command, you’ll see a local URL (usually something like):

```
http://localhost:5173/
```

Open it in your browser to view the app.

### Project Overview

This is a React-based quiz application that:

Displays questions from a JSON file

Allows single-option selection per question

Tracks user progress

Shows results at the end

### Tech Stack

React (Vite)

Tailwind CSS

shadcn/ui

React Router

###  Notes
Make sure you have Node.js (v16 or higher) installed

If styles don’t load, ensure Tailwind is configured properly

If routing doesn’t work, check that all routes are defined correctly


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
