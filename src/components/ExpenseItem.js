function ExpenseItem(props) {
  const month = props.d.toLocaleString("en-US", { month: "long" });
  const day = props.d.toLocaleString("en-US", { day: "2-digit" });
  const year = props.d.getFullYear();
  return (
    <>
      <h2>Expense Items</h2>

      <p>Title: {props.title}</p>
      <p>Amount: {props.amount}</p>
      <p>
        month: {month}, day: {day}, year: {year}
      </p>
    </>
  );
}
export default ExpenseItem;
