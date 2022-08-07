import React from "react";
import type { Pos } from "./types";

const useMouse = () => {
  const [mousePos, setMousePos] = React.useState<Pos>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY
    });
  };

  return { mousePos, handleMouseMove };
};

export default useMouse;
