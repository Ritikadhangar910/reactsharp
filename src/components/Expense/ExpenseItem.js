import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "../../App.css";
import Card from "../UI/Card";
import React, { useState } from "react";
const ExpenseItem = (props) => {
  const [amount, setamount] = useState(props.amount);
  function changeExpennse() {
    setamount("100$");
  }

  return (
    <>
      <Card className="cover">
        <h2>this is expense</h2>

        <ExpenseDate d={props.d} className="expensedate" />
        <ExpenseDetails
          className="expensedetail"
          amount={amount}
          location={props.location}
          title={props.title}
        />
        <button onClick={changeExpennse}>Change Expense</button>
      </Card>
    </>
  );
};
export default ExpenseItem;
