import ExpenseItem from "./components/Expense/ExpenseItem";
const DataFilter = (props) => {
  const items = props.val;
  const showitems = items.filter((item) => props.year === item.d.getFullYear());
  if (showitems.length === 0) {
    return <h2>No item here</h2>;
  }

  return (
    <>
      {showitems.map((item, ind) => (
        <ExpenseItem
          key={ind}
          title={item.title}
          amount={item.amount}
          d={item.d}
        />
      ))}
    </>
  );
};
export default DataFilter;
