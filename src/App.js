import React, { useState } from "react";
import Expense from "./Expenses";
import ExpenseForm from "./components/ExpenseForm";
import Filteryear from "./Filteryear";
import ExpenseChart from "./components/ExpenseChart";
const values = [
  { title: "title1", amount: 200, d: new Date(2000, 11, 11) },
  { title: "title2", amount: 300, d: new Date(2003, 9, 1) },
  { title: "title3", amount: 401.34, d: new Date(2003, 10, 2) },
  { title: "title4", amount: 943, d: new Date(2002, 8, 3) },
];
const App = () => {
  const [val, setval] = useState(values);
  const [filters, setfilter] = useState(2000);
  function getfromdetails(values) {
    setval((prev) => {
      return [...prev, values];
    });
  }
  function filteritem(year) {
    setfilter(Number(year));
  }
  return (
    <>
      <ExpenseForm onsummitval={getfromdetails} />
      <Filteryear val={val} onselectitem={filteritem} />
      <Expense val={val} year={filters} />
    </>
  );
};

export default App;
