import React from "react";
import "../styles/Modal.css";

const Modal = ({ shownModal, setShownModal }) => {
  const styles = shownModal ? "" : "shown-modal";
  const closeModalHandler = () => {
    setShownModal(false);
  };
  return (
    <>
      <div className={styles + " modal"}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Modal Header</h2>
            <button className="close-button" onClick={closeModalHandler}>
              x
            </button>
          </div>
          <div className="modal-body">
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>
          <div className="modal-footer">
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
