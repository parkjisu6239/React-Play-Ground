import React from "react";
import { css, cx } from "@emotion/css";

const backgroundCss = css`
  background-color: gray;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
`;

const LayoutEffect = () => {
  const [state, setState] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const animate = () => {
    if (!ref.current) return;

    ref.current.style.width = state
      ? `${ref.current.clientWidth - 200}px`
      : `${ref.current.clientWidth + 200}px`;
  };

  const onClick = () => {
    setState((prev) => !prev);
    animate();
  };

  return (
    <div className={cx(backgroundCss)} ref={ref}>
      <p>{state ? "참" : "거짓"}</p>
      <button onClick={onClick}>토글</button>
    </div>
  );
};

const LayoutEffectWithAnimationFrame = () => {
  const [state, setState] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const animate = () => {
    if (!ref.current) return;

    ref.current.style.width = state
      ? `${ref.current.clientWidth - 200}px`
      : `${ref.current.clientWidth + 200}px`;
  };

  const onClick = () => {
    setState((prev) => !prev);
    window.requestAnimationFrame(animate);
  };

  return (
    <div className={backgroundCss} ref={ref}>
      <p>{state ? "참" : "거짓"}</p>
      <button onClick={onClick}>토글</button>
    </div>
  );
};

const LayoutEffectWithHook = () => {
  const [state, setState] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const animate = () => {
    if (!ref.current) return;

    ref.current.style.width = state
      ? `${ref.current.clientWidth - 200}px`
      : `${ref.current.clientWidth + 200}px`;
  };

  const onClick = () => {
    setState((prev) => !prev);
  };

  React.useLayoutEffect(() => {
    animate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div className={backgroundCss} ref={ref}>
      <p>{state ? "참" : "거짓"}</p>
      <button onClick={onClick}>토글</button>
    </div>
  );
};

export { LayoutEffect, LayoutEffectWithAnimationFrame, LayoutEffectWithHook };
