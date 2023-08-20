function ExpenseDetails(props) {
  return (
    <>
      <p>amout: {props.amount}</p>
      <p>location: {props.location} </p>
      <p>title: {props.title}</p>
    </>
  );
}
export default ExpenseDetails;
