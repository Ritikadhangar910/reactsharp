import React, { useState } from "react";
const ExpenseForm = () => {
  const [title, settitle] = useState("");
  const [amount, setamount] = useState("");
  const [date, setdate] = useState("");
  return (
    <>
      <h2>ExpenseForm</h2>
      <br />
      <input
        type="text"
        value={title}
        onChange={(e) => {
          settitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        value={amount}
        onChange={(e) => {
          setamount(e.target.value);
        }}
      />
      <br />
      <input
        type="date"
        name=""
        id=""
        value={date}
        onChange={(e) => {
          setdate(e.target.value);
        }}
      />
      <br />
      <p>Expense title: {title} </p>
      <p>Expense Amount: {amount} </p>
      <p>Expense Date: {date}</p>
    </>
  );
};
export default ExpenseForm;
