import ReactDOM from "react-dom";
const PortalDemo = () => {
  return ReactDOM.createPortal(
    <>
      <h1>this is Portaldemo</h1>
      <p>this is my tag</p>
    </>,
    document.getElementById("portal-root")
  );
};
export default PortalDemo;
