import { useState } from "react";
import Compstyle from "./component/Compstyle";
import Showage from "./component/Showage";
const App = () => {
  const [details, setDetails] = useState([]);
  function getPersonInfo(values) {
    setDetails((prev) => [values, ...prev]);
  }
  return (
    <>
      <Compstyle onformSummit={getPersonInfo} />
      {details.map((item, ind) => (
        <div key={ind}>
          <Showage name={item.name} age={item.age} college={item.college} />
        </div>
      ))}
    </>
  );
};
export default App;
