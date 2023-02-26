import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import "../styles/Activity.css";

const Activity = ({ name, time }) => {
  const deleteActivityHandler = () => {
    console.log("delete");
  };
  return (
    <div
      className="activity"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay={time}
    >
      <button className="delete-button" onClick={deleteActivityHandler}>
        <DeleteForeverIcon />
      </button>
      {name}
    </div>
  );
};

export default Activity;
