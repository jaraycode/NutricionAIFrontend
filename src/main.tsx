import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { NavigationProvider } from "./NavigationContext";
import Dashboard from "./pages/dashboard";
import FAQs from "./pages/FAQs";
import ForgotPassword from "./pages/forgotPassword";
import ForgotPassword2 from "./pages/forgotPassword2";
import Login from "./pages/login";
import Scan from "./pages/scan";
import Settings from "./pages/settings";
import Signin from "./pages/signin";
import Transactions from "./pages/transactions";

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
