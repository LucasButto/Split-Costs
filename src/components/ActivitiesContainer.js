import React from "react";
import Activity from "./Activity";
import "../styles/ActivitiesContainer.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const ActivitiesContainer = () => {
  return (
    <div>
      <h2>Activities</h2>
      <div className="activities-container">
        <button className="activity new-activity-button">
          <div className="circle">
            <span>
              <AddRoundedIcon />
            </span>
          </div>
        </button>
        <Activity name={"viaje"} />
        <Activity name={"comida"} />
      </div>
    </div>
  );
};

export default ActivitiesContainer;
