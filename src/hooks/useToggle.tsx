import React from "react";

const useToggle = (on?: boolean) => {
  const [toggle, setToggle] = React.useState(!!on);
  const switchToggle = () => setToggle((prev) => !prev);
  const onToggle = () => setToggle(true);
  const offToggle = () => setToggle(false);

  return {
    toggle, switchToggle, onToggle, offToggle
  };
};

export default useToggle;
