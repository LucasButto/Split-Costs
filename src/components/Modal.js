import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import "../styles/Modal.css";

const Modal = ({ shownModal, setShownModal, activities, setActivities }) => {
  let styles = shownModal ? "show-modal" : "hide-modal";
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const closeModalHandler = () => {
    setShownModal(false);
    setInputValue("");
    setError("");
  };
  const createEventHandler = () => {
    if (inputValue !== "") {
      let activityTime = activities.length * 300;
      let newActivity = {
        name: inputValue,
        time: activityTime.toString(),
      };
      let newList = [...activities, newActivity];
      setActivities(newList);
      console.log(activities);
      closeModalHandler();
    } else {
      setError("error");
    }
  };
  return (
    <>
      <div className={styles + " modal"}>
        <div className="modal-content">
          <div className="modal-header">
            <button className="close-button" onClick={closeModalHandler}>
              <CloseRoundedIcon />
            </button>
          </div>
          <div className="modal-body">
            <h3>Ingrese el nombre del evento</h3>
            <input
              className={"modal-body-input " + error}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ej: Viaje, Comida, Supermercado..."
            />
            <div className="button-container">
              {error ? (
                <p className="error-message">
                  Ingrese un nombre para el evento
                </p>
              ) : null}
              <button className="add-button" onClick={createEventHandler}>
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
