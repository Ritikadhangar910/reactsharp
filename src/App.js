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
          <Showage name={item.name} age={item.age} />
        </div>
      ))}
    </>
  );
};

export default App;
