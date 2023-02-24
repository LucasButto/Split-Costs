import React from "react";

const Activity = ({ name, time }) => {
  return (
    <div
      className="activity"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay={time}
    >
      {name}
    </div>
  );
};

export default Activity;
