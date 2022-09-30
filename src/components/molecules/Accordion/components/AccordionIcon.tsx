import React from "react";
import { css, cx } from "@emotion/css";
import { useAccordionContext } from "../useAccordionContext";

const accordionIconCss = css`
  transform: rotate(90deg);
  transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

const expandedCss = css`
  transform: rotate(270deg);
`;

interface Props {
  children?: (expanded: boolean) => React.ReactNode
}

const AccordionIcon = ({ children }: Props) => {
  const { expanded } = useAccordionContext();

  if (children) {
    return <>{children(expanded)}</>;
  }

  return (
    <div className={cx(accordionIconCss, { [expandedCss]: expanded })}>
      &lt;
    </div>
  );
};

export default AccordionIcon;
