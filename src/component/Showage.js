import React from "react";
function Showage(props) {
  return (
    <>
      <h2>
        My name is {props.name} & I'm {props.age} Years old & college is{" "}
        {props.college}
      </h2>
    </>
  );
}
export default Showage;
