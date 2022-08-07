import React from "react";
import { css } from "@emotion/css";
import Nyan from "src/assets/nyan.gif";
import type { Pos } from "src/components/molecules/Mouse/types";

const catCss = (pos: Pos) => css`
  position: absolute;
  width: 100px;
  height: auto;
  left: ${pos.x - 30}px;
  top: ${pos.y - 50}px;
  pointer-events: none;
`;

interface Props {
  pos: Pos
}

const Cat = ({ pos }: Props) => (
  <img className={catCss(pos)} src={Nyan} alt="nyan" />
);

export default Cat;
