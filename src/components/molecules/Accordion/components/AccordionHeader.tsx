import React from "react";
import { css } from "@emotion/css";
import { useAccordionContext } from "../useAccordionContext";

const headerCss = css`
  display: flex;
  justify-content: space-between;
  background-color: red;
  cursor: pointer;
`;

interface Props {
  children: React.ReactNode
}

const AccordionHeader = ({ children }: Props) => {
  const { onChange } = useAccordionContext();

  return (
    <div
      onClick={onChange}
      className={headerCss}
    >
      {children}
    </div>
  );
};

export default AccordionHeader;
