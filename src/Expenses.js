import DataFilter from "./DataFilter";
import ExpenseChart from "./components/ExpenseChart";
function Expense(props) {
  const items = props.val;
  const showitems = items.filter((item) => props.year === item.d.getFullYear());
  return (
    <div className="App">
      <ExpenseChart showitems={showitems} />
      <DataFilter showitems={showitems} />
    </div>
  );
}

export default Expense;
