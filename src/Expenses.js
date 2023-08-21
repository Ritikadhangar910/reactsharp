import ExpenseItem from "./components/Expense/ExpenseItem";
function Expense(props) {
  return (
    <div className="App">
      <ExpenseItem
        title={props.val.title}
        amount={props.val.amount}
        d={props.val.date}
      />
    </div>
  );
}
export default Expense;
