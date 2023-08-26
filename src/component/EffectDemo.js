import "../App.css";
import { useEffect, useState } from "react";
const EffectDemo = () => {
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");
  const [college, setcollege] = useState("");
  const [disable, adddisable] = useState(false);

  function submitForm(e) {
    e.preventDefault();
  }
  useEffect(() => {
    if (mail.includes("@") && pass.length > 6 && college.length > 0) {
      adddisable(false);
    } else {
      adddisable(true);
    }
  }, [mail, pass, college]);
  return (
    <>
      <h2>form</h2>
      <form action="" onSubmit={submitForm} className="formdata">
        Email:{" "}
        <input
          type="email"
          value={mail}
          onChange={(e) => {
            setmail(e.target.value);
          }}
        />
        <br />
        <br />
        password:{" "}
        <input
          type="password"
          value={pass}
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />
        <br />
        <br />
        college:{" "}
        <input
          type="text"
          value={college}
          onChange={(e) => {
            setcollege(e.target.value);
          }}
        />
        <br />
        <br />
        <button disabled={disable}>Summit it</button>
      </form>
    </>
  );
};
export default EffectDemo;
