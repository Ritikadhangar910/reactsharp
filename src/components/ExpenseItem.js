import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
  return (
    <>
      <h2>Expense Items</h2>

      <ExpenseDate d={props.d} />
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      />
    </>
  );
}
export default ExpenseItem;
