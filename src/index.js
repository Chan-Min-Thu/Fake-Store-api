import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./context/Context";
import { UserContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </UserContextProvider>  
    </BrowserRouter>
  </React.StrictMode>
);
