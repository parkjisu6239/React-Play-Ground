import React from "react";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>Navbar</header>
      <h1>모든 페이지컴포넌트를 wrapping 하는 컴포넌트</h1>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
