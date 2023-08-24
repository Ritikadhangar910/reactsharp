import React, { useState } from "react";
import "../App.css";
const Compstyle = () => {
  const [val, setval] = useState(true);
  const [formval, formsetval] = useState("");
  function summitform(e) {
    e.preventDefault();
    if (formval.length === 0) {
      setval(false);
    } else {
      console.log(formval);
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
        <input
          type="text"
          value={formval}
          onChange={(e) => {
            formsetval(e.target.value);
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
