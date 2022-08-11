import type { ChangeEvent, UIEvent } from "react";
import React from "react";
import { css } from "@emotion/css";
import { lorem } from "./constants";

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

const inpitWrapperCss = css`
  border: 1px solid grey;
`;

const UseRef = () => {
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const inputRef2 = React.useRef<HTMLInputElement | null>(null);

  const [scrollTop, setScrollTop] = React.useState(0);
  const divRef = React.useRef<HTMLDivElement>(null);
  const divRef2 = React.useRef<HTMLDivElement | null>(null);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

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
        <div className={inpitWrapperCss}>
          <input id="refInput" ref={inputRef} />
          <p>{inputRef.current?.value}</p>
        </div>
        <div className={inpitWrapperCss}>
          <input id="refInput2" ref={(ref) => { inputRef2.current = ref; }} />
          <p>{inputRef2.current?.value}</p>
        </div>
        <div className={inpitWrapperCss}>
          <input
            id="JustInput"
            value={input}
            onChange={handleInput}
          />
          <p>{input}</p>
        </div>
      </section>
    </div>
  );
};

export default UseRef;
