import AccordionBody from "./components/AccordionBody";
import AccordionHeader from "./components/AccordionHeader";
import AccordionIcon from "./components/AccordionIcon";
import Accordion from "./Accordion";

export const Usage = () => (
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
);
