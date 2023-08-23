import Chart from "../Chart/Chart";
const expensedata = [
  { label: "Jan", value: 0 },
  { label: "Feb", value: 0 },
  { label: "Mar", value: 0 },
  { label: "Apr", value: 0 },
  { label: "May", value: 0 },
  { label: "June", value: 0 },
  { label: "July", value: 0 },
  { label: "Aug", value: 0 },
  { label: "Sep", value: 0 },
  { label: "Oct", value: 0 },
  { label: "Nov", value: 0 },
  { label: "Dec", value: 0 },
];

function ExpenseChart(props) {
  for (const expense of props.showitems) {
    const expenseMonth = expense.d.getMonth();
    expensedata[expenseMonth].value += expense.amount;
  }
  return (
    <>
      <Chart showPoints={expensedata} />
    </>
  );
}
export default ExpenseChart;
