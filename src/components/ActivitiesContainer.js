import React from "react";
import { useState } from "react";

import Activity from "./Activity";
import Modal from "./Modal";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import "../styles/ActivitiesContainer.css";

const ActivitiesContainer = () => {
  const [shownModal, setShownModal] = useState(false);
  const openModalhandler = () => {
    setShownModal(!shownModal);
    console.log(shownModal);
  };
  return (
    <div>
      <div className="activities-container">
        <button
          className="activity new-activity-button"
          onClick={openModalhandler}
        >
          <div className="circle">
            <span>
              <AddRoundedIcon />
            </span>
          </div>
        </button>
        <Activity name={"viaje"} time={"0"} />
        <Activity name={"comida"} time={"300"} />
        <Activity name={"comida"} time={"600"} />
        <Activity name={"comida"} time={"900"} />
        <Activity name={"comida"} time={"1200"} />
        <Activity name={"comida"} time={"1500"} />
        <Activity name={"comida"} time={"1800"} />
        <Modal shownModal={shownModal} setShownModal={setShownModal} />
      </div>
    </div>
  );
};

export default ActivitiesContainer;
