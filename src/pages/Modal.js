import React from "react";
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show
    ? "modal  display-block"
    : "modal  display-none";
  return (
    <div id="modal1" className={showHideClassName}>
      <section className="modal-header">
        <button onClick={handleClose}>close</button>
      </section>
      <section className="modal-content">{children}</section>
    </div>
  );
};
export default Modal;
