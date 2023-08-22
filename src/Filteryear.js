import { useState } from "react";

const Filteryear = (props) => {
  const [item, setitem] = useState("");
  const stores = props.val;
  function filteritem(e) {
    e.preventDefault();
    const value = e.target.value;
    setitem(e.target.value);
    props.onselectitem(value);
  }
  return (
    <>
      <h2>filtered</h2>
      <select value={item} onChange={filteritem}>
        <option>select</option>
        {stores.map((store, i) => (
          <option key={i}>{store.d.getFullYear()}</option>
        ))}
      </select>
    </>
  );
};
export default Filteryear;
