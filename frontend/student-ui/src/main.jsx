// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import React from "react";
// import ReactDom from "react-dom/client";
// import App from "./App";
// ReactDom.createRoot(document.getElementById("root")).render(<App/>);


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// frontend :

// node_modules
// dist
// .env


// backend :

// traget/
// .idea/
// *.log

// git init
// git add .
// git commit -m "Initial commit: employee app"


// git add .
// git commit -m "message"
// git push


// git status         
// git log --oneline  
// git branch feature-delete
// git checkout feature-delete
// git merge feature-delete

// git branch -M main
// git remote add origin https://github.com/<your-username>/employee-app-frontend.git
// git push -u origin main

// deployment overview

// users-> frontend host(static files)
//             |HTTP
//             backendhost(springboost jar)
//     could mysql Database -- aws ,railway

// backend -> (springboot)./mvnw clean package
// java -jar target/employee-app-0.0.1-SNAPSHOT.jar  springboot jar

//frontend ->(react)
// npm run build

// no secrets in github
// vite API url backend live url not local host
// cors allow live frontend url
// backend db connection check
// test add,view,delete at live site