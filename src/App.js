import React from "react";
import { Navbar } from "./components/Navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products";
import { Details } from "./pages/Details";
import { List } from "./pages/List";
import { Login } from "./pages/Login";
import SignUp from "./components/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import Order from "./components/Order";

const App = () => {
  return (
    <AuthContextProvider>
      <div className="relative bg-slate-200 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/products/:id" element={<Details />}></Route>
          <Route path="/lists" element={<List />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/order" element={<Order/>}></Route>
        </Routes>
      </div>
    </AuthContextProvider>
  );
};

export default App;
