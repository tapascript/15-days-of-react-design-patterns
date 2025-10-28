import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BrandProvider from "./provider/BrandProvider.jsx";
import ThemeProvider from "./provider/ThemeProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <BrandProvider>
                <App />
            </BrandProvider>
        </ThemeProvider>
    </React.StrictMode>
);
