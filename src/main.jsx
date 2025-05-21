import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import ProtectedLayout from "./ProtectedLayout";
import AboutPage from "./AboutPage.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/app"
          element={
            <ProtectedLayout>
              <App />
            </ProtectedLayout>
          }
        />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
