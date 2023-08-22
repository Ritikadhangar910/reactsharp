import React, { useState } from "react";
import Formdata from "../Formdata";
const ExpenseForm = (props) => {
  const [toggle, settoggle] = useState(true);

  function canceldata() {
    settoggle(false);
  }
  function showdata() {
    settoggle(true);
  }
  return (
    <>
      {toggle ? (
        <Formdata onCancel={canceldata} data={props} />
      ) : (
        <button onClick={showdata}>show data</button>
      )}
    </>
  );
};
export default ExpenseForm;
