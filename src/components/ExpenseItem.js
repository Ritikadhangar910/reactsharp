function ExpenseItem(props) {
  return (
    <>
      <h2>Expense Items</h2>
      <p>Food Rs 10</p>
      <p>Petrol Rs 100</p>
      <p>Movies Rs 200</p>
      <p>expend money : {props.city}</p>
    </>
  );
}
export default ExpenseItem;
