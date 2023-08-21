import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [title, settitle] = useState("");
  const [amount, setamount] = useState("");
  const [date, setdate] = useState("");
  function summitbtn(e) {
    e.preventDefault();
    const obj = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onsummitval(obj);
    settitle("");
    setamount("");
    setdate("");
  }
  return (
    <>
      <h2>ExpenseForm</h2>
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
      <form action="">
        <p>Expense title: {title} </p>
        <p>Expense Amount: {amount} </p>
        <p>Expense Date: {date}</p>
        <button onClick={summitbtn}>Summit it</button>
      </form>
    </>
  );
};
export default ExpenseForm;
