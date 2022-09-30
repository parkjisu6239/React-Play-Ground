import React from "react";
import { useAccordionContext } from "../useAccordionContext";

interface Props {
  children: React.ReactNode
}

const AccordionHeader = ({ children }: Props) => {
  const { expanded, setExpanded } = useAccordionContext();

  return (
    <div
      onClick={() => setExpanded(!expanded)}
    >
      {children}
    </div>
  );
};

export default AccordionHeader;
