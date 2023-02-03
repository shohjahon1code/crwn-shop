import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";
import { SignupProvider } from "./context/signup-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SignupProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </SignupProvider>
);
