import React from "react";
import { useState } from "react";

import Activity from "./Activity";
import Modal from "./Modal";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import "../styles/ActivitiesContainer.css";

const ActivitiesContainer = () => {
  const [shownModal, setShownModal] = useState(false);
  const [activities, setActivities] = useState([
    { name: "jugar", time: "0" },
    { name: "hacer nada", time: "300" },
  ]);
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
        {activities.map((activity) => {
          return <Activity name={activity.name} time={activity.time} />;
        })}
        <Modal
          shownModal={shownModal}
          setShownModal={setShownModal}
          activities={activities}
          setActivities={setActivities}
        />
      </div>
    </div>
  );
};

export default ActivitiesContainer;
