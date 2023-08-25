import React, { useState } from "react";
import "../App.css";
const Compstyle = (props) => {
  const [val, setval] = useState(true);
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  function summitform(e) {
    e.preventDefault();
    if (age.length === 0 || name.length === 0) {
      setval(false);
    } else if (age <= 0) {
      alert("enter a valid age");
    } else {
      const obj = {
        name: name,
        age: age,
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
          value={name}
          onChange={(e) => {
            setname(e.target.value);
            setval(true);
          }}
        />
        <br />
        <br /> Age (Years):
        <input
          type="text"
          value={age}
          onChange={(e) => {
            setage(e.target.value);
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
