import React from "react";
import wave from "../../Images/Conservation/oceanWave.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="error-container">
      <img className="errorImg" src={wave} alt="404 Pic" />
      <h1 className="errorText">Oops... 404</h1>
    </div>
  );
};

export default NotFound;
