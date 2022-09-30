import React from "react";

interface AccordionContextType {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void
}

const defaultValue = {
  expanded: false,
  setExpanded: () => null
};

const AccordionContext = React.createContext<AccordionContextType>(
  defaultValue
);

const useAccordionContext = () => {
  const context = React.useContext<AccordionContextType>(AccordionContext);
  return context;
};

export { AccordionContext, useAccordionContext };
