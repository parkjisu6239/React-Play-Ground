/* eslint-disable react/jsx-no-constructed-context-values */
import React from "react";
import { css } from "@emotion/css";
import { AccordionContext } from "./useAccordionContext";

const accordionCss = css`
  border: 1px solid black;
`;

interface Props {
  children: React.ReactNode
  expanded?: boolean;
  onChange?: () => void
}

const Accordion = ({ children, ...props }: Props) => {
  const [expanded, setExpanded] = React.useState(!!props.expanded);

  React.useEffect(() => {
    console.log("updated");
  });

  const value = React.useMemo(() => {
    return {
      expanded: props.expanded ?? expanded,
      onChange: props.onChange ?? (() => setExpanded((prev) => !prev))
    };
  }, [props.expanded, expanded, props.onChange]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AccordionContext.Provider
      value={value}
    >
      <div className={accordionCss}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default React.memo(Accordion);
