import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "../../App.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  function deleteExpense(e) {
    const grabelem = e.target.parentNode;
    const getdiv = e.target.parentNode.parentNode;
    getdiv.removeChild(grabelem);
  }
  return (
    <>
      <Card className="cover">
        <h2>this is expense</h2>

        <ExpenseDate d={props.d} className="expensedate" />
        <ExpenseDetails
          className="expensedetail"
          amount={props.amount}
          location={props.location}
          title={props.title}
        />
        <button onClick={deleteExpense}>delete</button>
      </Card>
    </>
  );
};
export default ExpenseItem;
