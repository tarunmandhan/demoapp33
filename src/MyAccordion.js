import React, { useState } from "react";

const MyAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  //   const ans = () => {          // OR onClick={() => setShow(!show)}    is same working
  //     if (show === false) {
  //       setShow(true);
  //     } else {
  //       setShow(false);
  //     }
  //   };

  return (
    <>
      <div className="main-heading">
        <p onClick={() => setShow(!show)}>{show ? "➖" : "➕"}</p>
        <h3>{question}</h3>
      </div>
      {show && <p className="answers">{answer}</p>}
    </>
  );
};

export default MyAccordion;

// {show ? "➖" : "➕"}  is  change symble with show & hide answer.
