# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev \& build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.



\# Student Management Frontend



A React application built with Vite to manage student records using a Spring Boot REST API.



\## Features

\- View student records

\- Add new students

\- Delete students

\- Search students by name

\- Display the number of students found



\## Requirements

\- Node.js and npm

\- Spring Boot backend running on port 8080



\## Setup and Run



Install dependencies:



```bash

npm install

```



Start the development server:



```bash

npm run dev

```



Open `http://localhost:5173/` in your browser.



\## API Configuration



The frontend uses the API URL configured through `VITE\_API\_URL`. See `.env.example` for the example configuration.



Default API URL: `http://localhost:8080/api/students`

