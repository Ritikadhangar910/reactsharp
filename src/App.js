import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    { title: "Car insurense", amount: 234.56, date: new Date(2022, 10, 4) },
    { title: "Bike insurense", amount: 987.56, date: new Date(2000, 3, 6) },
    { title: "Food", amount: 36, date: new Date(2022, 6, 4) },
    { title: "movie", amount: 335.0, date: new Date(2021, 23, 5) },
  ];
  return (
    <div className="App">
      {expenses.map((expense, i) => (
        <div key={i}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            d={expense.date}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
