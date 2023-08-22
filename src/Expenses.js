import ExpenseItem from "./components/Expense/ExpenseItem";
function Expense(props) {
  const items = props.val;
  console.log(props.year, "year");
  return (
    <div className="App">
      {items.map((item, ind) => (
        <>
          {props.year === item.d.getFullYear() ? (
            <ExpenseItem
              key={ind}
              title={item.title}
              amount={item.amount}
              d={item.d}
            />
          ) : null}
        </>
      ))}
    </div>
  );
}
export default Expense;
