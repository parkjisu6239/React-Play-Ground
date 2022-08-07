import React from "react";
import { css } from "@emotion/css";
import useMouse from "./useMouse";
import type { Pos } from "./types";

const backCss = css`
  top: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`;

interface Props {
  children: (pos: Pos) => React.ReactChild;
}

const Mouse = ({ children }: Props) => {
  const { mousePos, handleMouseMove } = useMouse();

  return (
    <div className={backCss} onMouseMove={handleMouseMove}>
      <p>
        The current mouse position is ({mousePos.x}, {mousePos.y})
      </p>
      {children(mousePos)}
    </div>
  );
};

export default Mouse;
