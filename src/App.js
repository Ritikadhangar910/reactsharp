import React, { useState } from "react";
import Expense from "./Expenses";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const [val, setval] = useState("");
  function getfromdetails(values) {
    setval(values);
  }
  return (
    <>
      <ExpenseForm onsummitval={getfromdetails} />
      {val === "" ? null : <Expense val={val} />}
    </>
  );
};

export default App;
