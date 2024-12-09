import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import FAQs from "./pages/FAQs.tsx";
import Signin from "./pages/signin.tsx";
import Login from "./pages/login.tsx";
import ForgotPassword from "./pages/forgotPassword.tsx";
import ForgotPassword2 from "./pages/forgotPassword2.tsx";
import Dashboard from "./pages/dashboard.tsx";
import Settings from "./pages/settings.tsx";
import Scan from "./pages/scan.tsx";
import Transactions from "./pages/transactions.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/FAQs" element={<FAQs />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/forgotPassword2" element={<ForgotPassword2 />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Scan" element={<Scan />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>
);
