import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import FAQs from "./pages/FAQs";
import Signin from "./pages/signin";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgotPassword";
import ForgotPassword2 from "./pages/forgotPassword2";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import Scan from "./pages/scan";
import Transactions from "./pages/transactions";
import { NavigationProvider } from "./NavigationContext";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <NavigationProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/forgotPassword2" element={<ForgotPassword2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </NavigationProvider>
  </BrowserRouter>
);