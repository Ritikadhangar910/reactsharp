// import "../App.css";
// import { useEffect, useState, useReducer } from "react";

// const emailReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.includes("@") };
//   } else if (action.type === "INPUT_BLUR") {
//     return { value: state.value, isValid: state.value.includes("@") };
//   }
//   return { value: "", isValid: true };
// };

// const passReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.length > 6 };
//   } else if (action.type === "INPUT_BLUR") {
//     return { value: state.value, isValid: state.value.length > 6 };
//   }
//   return { value: "", isValid: true };
// };
// const EffectDemo = () => {
//   const [college, setcollege] = useState("");
//   const [disable, adddisable] = useState(false);
//   const [validateEmail, dispatchEmail] = useReducer(emailReducer, {
//     value: "",
//     isValid: true,
//   });

//   const [validatePass, dispatchPass] = useReducer(passReducer, {
//     value: "",
//     isValid: true,
//   });
//   function submitForm(e) {
//     e.preventDefault();
//   }

//   useEffect(() => {
//     const val = setTimeout(() => {
//       if (validateEmail.isValid && validatePass.isValid && college.length > 0) {
//         adddisable(false);
//       } else {
//         adddisable(true);
//       }
//     }, 500);
//     return () => {
//       clearTimeout(val);
//     };
//   }, [validateEmail.value, validatePass.value, college]);

//   function checkMailvalid() {
//     dispatchEmail({ type: "INPUT_BLUR" });
//   }
//   function checkPassvalid() {
//     dispatchPass({ type: "INPUT_BLUR" });
//   }
//   return (
//     <>
//       <h2>form</h2>
//       <form action="" onSubmit={submitForm} className="formdata">
//         <div className={`${validateEmail.isValid ? "" : "invalid"}`}>
//           Email:
//           <input
//             type="email"
//             value={validateEmail.value}
//             onChange={(e) => {
//               dispatchEmail({ type: "USER_INPUT", val: e.target.value });
//             }}
//             onBlur={checkMailvalid}
//           />
//         </div>
//         <br />
//         <br />
//         <div className={`${validatePass.isValid ? "" : "invalid"}`}>
//           password:
//           <input
//             type="password"
//             value={validatePass.value}
//             onChange={(e) => {
//               dispatchPass({ type: "USER_INPUT", val: e.target.value });
//             }}
//             onBlur={checkPassvalid}
//           />
//         </div>
//         <br />
//         <br />
//         college:
//         <input
//           type="text"
//           value={college}
//           onChange={(e) => {
//             setcollege(e.target.value);
//           }}
//           onBlur={(e) => {}}
//         />
//         <br />
//         <br />
//         <button disabled={disable}>Summit it</button>
//       </form>
//     </>
//   );
// };
// export default EffectDemo;
