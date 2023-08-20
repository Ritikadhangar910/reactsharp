import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenselocation = "Delhi";
  return (
    <div className="App">
      <ExpenseItem city={expenselocation} />
    </div>
  );
}

export default App;
