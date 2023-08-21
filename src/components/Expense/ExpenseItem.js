import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "../../App.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  return (
    <>
      <Card className="cover">
        <h2>this is expense</h2>

        <ExpenseDate d={props.d} className="expensedate" />
        <ExpenseDetails
          className="expensedetail"
          amount={props.amount}
          title={props.title}
        />
      </Card>
    </>
  );
};
export default ExpenseItem;
