import DataFilter from "./DataFilter";
function Expense(props) {
  return (
    <div className="App">
      <DataFilter val={props.val} year={props.year} />
    </div>
  );
}

export default Expense;
