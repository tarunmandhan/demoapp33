import React, { useState } from "react";
import { questions } from "./Api";
import "./Accordion.css";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  const [data, setData] = useState(questions); // Api.js file ka data isme aa gya h. data ko pehle stae mien rakhte h fir map method mien use kr salte h
  return (
    <>
      <section className="main-div">
        <h1>React Interview Questions</h1>
        {data.map((curElem) => {
          // ↟ map method ke khud ke attributes hote h (current data or element, current index, kis array ke sath work kr rhe ho, last wala utna useful nhi h  )
          return <MyAccordion key={curElem.id} {...curElem} />;
        })}
      </section>
    </>
  );
};

export default Accordion;
