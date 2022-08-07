import React from "react";
import { Routes, Route } from "react-router-dom";
import Page from "src/components/pages";
import App from "./App";

const RootRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Page.HomePage />} />
      <Route path="about" element={<Page.AboutPage />} />
      <Route path="render-props" element={<Page.RenderPropsPage />} />
      <Route path="*" element={<div>404</div>} />
    </Route>
  </Routes>
);

export default RootRoutes;
