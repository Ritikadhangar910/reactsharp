import React, { useState, useRef } from "react";
import "../App.css";
const Compstyle = (props) => {
  const [val, setval] = useState(true);
  const name = useRef("");
  const age = useRef("");
  const college = useRef("");
  function summitform(e) {
    const myname = name.current.value;
    const myage = age.current.value;
    const mycollege = college.current.value;
    e.preventDefault();
    if (myname.length === 0 || myage.length === 0 || mycollege.length === 0) {
      setval(false);
    } else if (myage <= 0) {
      alert("enter a valid age");
    } else {
      const obj = {
        name: myname,
        age: myage,
        college: mycollege,
      };
      props.onformSummit(obj);
    }
  }
  return (
    <>
      <h2>add element</h2>
      <form
        action=""
        onSubmit={summitform}
        className={`formdata ${!val ? "invalid" : ""}`}
      >
        User Name:
        <input
          type="text"
          ref={name}
          onChange={() => {
            setval(true);
          }}
        />
        <br />
        <br /> Age (Years):
        <input
          type="text"
          ref={age}
          onChange={() => {
            setval(true);
          }}
        />
        <br />
        <br />
        User College :
        <input
          type="text"
          ref={college}
          onChange={() => {
            setval(true);
          }}
        />
        <br />
        <br />
        <button>Add Element</button>
      </form>
    </>
  );
};
export default Compstyle;
