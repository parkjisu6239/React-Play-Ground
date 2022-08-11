import type { ButtonHTMLAttributes, ChangeEvent, UIEvent } from "react";
import React from "react";
import { css } from "@emotion/css";
import { lorem } from "./constants";

import AwesomeButton from "./AwesomeButton";

const refCss = css`
  display: grid;
  gap: 20px;
  margin: 10px;

  section {
    display: flex;
    padding: 20px;
    border: 1px solid black;
    justify-content: center;
    gap: 20px;
  }
`;

const divWrapperCss = css`
  height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px;
  margin: 30px;
  background-color: gray;
`;

const FancyButton = React.forwardRef(
  (
    props: React.PropsWithChildren<unknown>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => (
    <button ref={ref} className="FancyButton">{props.children}</button>
  )
);

const UseRef = () => {
  const [scrollTop, setScrollTop] = React.useState(0);
  const divRef = React.useRef<HTMLDivElement>(null);
  const divRef2 = React.useRef<HTMLDivElement | null>(null);

  const buttonRef1 = React.useRef<HTMLButtonElement>(null);
  const buttonRef2 = React.useRef<HTMLButtonElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div className={refCss}>
      <h1>useRef</h1>
      <section>
        <div>
          <div
            className={divWrapperCss}
            id="refDiv"
            ref={divRef}
          >
            {lorem}
          </div>
          <p>스크롤탑 : {divRef.current?.scrollTop}</p>
          <button
            onClick={() => console.log(divRef.current?.scrollTop)}
          >
            콘솔 확인
          </button>
        </div>
        <div>
          <div
            className={divWrapperCss}
            id="refDiv"
            ref={(ref) => { divRef2.current = ref; }}
          >
            {lorem}
          </div>
          <p>스크롤탑 : {divRef2.current?.scrollTop}</p>
          <button
            onClick={() => console.log(divRef2.current?.scrollTop)}
          >
            콘솔 확인
          </button>
        </div>
        <div>
          <div id="JustDiv" className={divWrapperCss} onScroll={handleScroll}>
            {lorem}
          </div>
          <p>스크롤탑 : {scrollTop}</p>
          <button
            onClick={() => console.log(scrollTop)}
          >
            콘솔 확인
          </button>
        </div>
      </section>
      <section>
        <AwesomeButton ref={buttonRef1}>buttonRef1</AwesomeButton>
        <FancyButton ref={buttonRef2}>buttonRef2</FancyButton>
      </section>
    </div>
  );
};

export default UseRef;
