import React, { useState } from "react";
import "../styles/Modal.css";

const Modal = ({ shownModal, setShownModal }) => {
  const styles = shownModal ? "show-modal" : "hide-modal";
  const [inputValue, setInputValue] = useState("");
  const closeModalHandler = () => {
    setShownModal(false);
    setInputValue("");
  };
  const createEventHandler = () => {
    console.log("evento creado: " + inputValue);
    closeModalHandler();
  };
  return (
    <>
      <div className={styles + " modal"}>
        <div className="modal-content">
          <div className="modal-header">
            <button className="close-button" onClick={closeModalHandler}>
              x
            </button>
          </div>
          <div className="modal-body">
            <h3>Ingrese el nombre del evento</h3>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ej: Viaje, Comida, Supermercado..."
            />
            <div className="button-container">
              <button onClick={createEventHandler}>Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
