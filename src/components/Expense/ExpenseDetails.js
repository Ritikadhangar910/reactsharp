const ExpenseDetails = (props) => {
  return (
    <>
      <div className={props.className}>
        <p>amout: {props.amount}</p>
        <p>location: {props.location} </p>
        <p>title: {props.title}</p>
      </div>
    </>
  );
};
export default ExpenseDetails;
