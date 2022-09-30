import React from "react";
import { css, cx } from "@emotion/css";
import { useAccordionContext } from "../useAccordionContext";

const accordionBodyCss = css`
  max-height: 0;
  transition: max-height .5s ease-in-out;
  overflow: hidden;
  background: #d5d5d5;
`;

const expandedCss = css`
  max-height: 999px;
  transition: max-height .5s ease-in-out;
`;

interface Props {
  children: React.ReactNode
}

const AccordionBody = ({ children }: Props) => {
  const { expanded } = useAccordionContext();

  return (
    <div className={cx(accordionBodyCss, { [expandedCss]: expanded })}>
      {children}
    </div>
  );
};

export default AccordionBody;
