import React from "react";

interface Props {
  ref: React.RefObject<HTMLButtonElement>;
  children: React.ReactChild;
}

const AwesomeButton = ({ ref, children }: Props) => (
  <button ref={ref}>{children}</button>
);

export default AwesomeButton;
