/* eslint-disable react/no-array-index-key */
import React from "react";

import AccordionBody from "./components/AccordionBody";
import AccordionHeader from "./components/AccordionHeader";
import AccordionIcon from "./components/AccordionIcon";
import Accordion from "./Accordion";

const Usage = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(0);

  const handleIndex = (idx: number) => {
    if (expandedIndex === idx) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(idx);
    }
  };

  return (
    <article style={{ padding: "20px" }}>
      <section>
        단일 아코디언
        <Accordion>
          <AccordionHeader>헤더 <AccordionIcon /></AccordionHeader>
          <AccordionBody>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
          </AccordionBody>
        </Accordion>
      </section>
      <hr />
      <section style={{ display: "grid", gap: "10px" }}>
        논 컨트롤드 아코디언 그룹
        {Array(3).fill(0).map((_, idx) => (
          <Accordion
            key={idx}
          >
            <AccordionHeader>
              {idx}헤더 <AccordionIcon />
            </AccordionHeader>
            <AccordionBody>
              <p>내용</p>
              <p>내용</p>
              <p>내용</p>
              <p>내용</p>
              <p>내용</p>
              <p>내용</p>
            </AccordionBody>
          </Accordion>
        ))}
      </section>
      <hr />
      <section style={{ display: "grid", gap: "10px" }}>
        컨트롤드 아코디언 그룹 {expandedIndex}
        {Array(3).fill(0).map((_, idx) => (
          <Accordion
            key={idx}
            expanded={expandedIndex === idx}
            onChange={() => handleIndex(idx)}
          >
            <AccordionHeader>
              {idx}헤더 <AccordionIcon />
            </AccordionHeader>
            <AccordionBody>
              <p>내용</p>
              <p>내용</p>
              <p>내용</p>
              <p>내용</p>
              <p>내용</p>
              <p>내용</p>
            </AccordionBody>
          </Accordion>
        ))}
      </section>
    </article>
  );
};

export default Usage;
