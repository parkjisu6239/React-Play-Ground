import React from "react";
import { AccordionContext } from "./useAccordionContext";

interface Props {
  children: React.ReactNode
}

const Accordion = ({ children }: Props) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AccordionContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </AccordionContext.Provider>
  );
};

export default Accordion;
