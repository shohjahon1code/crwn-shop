import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";
import LoaderProvider from "./context/loader-context";
import { SignupProvider } from "./context/signup-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoaderProvider>
    <SignupProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </SignupProvider>
  </LoaderProvider>
);
