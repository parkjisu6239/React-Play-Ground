import React from "react";

interface AccordionContextType {
  expanded: boolean;
  onChange: () => void
}

const defaultValue = {
  expanded: false,
  onChange: () => null
};

const AccordionContext = React.createContext<AccordionContextType>(
  defaultValue
);

const useAccordionContext = () => {
  const context = React.useContext<AccordionContextType>(AccordionContext);
  return context;
};

export { AccordionContext, useAccordionContext };
