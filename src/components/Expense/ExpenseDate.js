const ExpenseDate = (props) => {
  const month = props.d.toLocaleString("en-US", { month: "long" });
  const day = props.d.toLocaleString("en-US", { day: "2-digit" });
  const year = props.d.getFullYear();

  return (
    <>
      <div className={props.className}>
        <p>
          Date:- {month} {day} {year}
        </p>
      </div>
    </>
  );
};
export default ExpenseDate;
