function ExpenseDate(props) {
  const month = props.d.toLocaleString("en-US", { month: "long" });
  const day = props.d.toLocaleString("en-US", { day: "2-digit" });
  const year = props.d.getFullYear();
  return (
    <>
      <p>
        Date:- {month} {day} {year}
      </p>
    </>
  );
}
export default ExpenseDate;
