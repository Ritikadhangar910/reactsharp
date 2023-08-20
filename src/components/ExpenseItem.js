function ExpenseItem(props) {
  return (
    <>
      <h2>Expense Items</h2>

      <p>Title: {props.title}</p>
      <p>Amount: {props.amount}</p>
      <p>Date: {props.d.toISOString()}</p>
    </>
  );
}
export default ExpenseItem;
