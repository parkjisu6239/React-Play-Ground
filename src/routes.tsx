import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";

const RootRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default RootRoutes;
