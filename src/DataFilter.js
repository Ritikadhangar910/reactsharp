import ExpenseItem from "./components/Expense/ExpenseItem";
const DataFilter = (props) => {
  if (props.showitems.length === 0) {
    return <h2>No item here</h2>;
  }

  return (
    <>
      {props.showitems.map((item, ind) => (
        <div key={ind}>
          <ExpenseItem title={item.title} amount={item.amount} d={item.d} />
        </div>
      ))}
    </>
  );
};
export default DataFilter;
