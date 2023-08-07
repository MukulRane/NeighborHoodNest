import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../ScheduledTask/ScheduledTask.css";
import { AppContext } from "../../../AppContext";

const Logout = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const { setIsLoggedIn } = useContext(AppContext);

  const handleCancelTask = () => {
    setShowPopup(true);
  };

  const handleConfirmCancel = () => {
    localStorage.setItem("isLoggedIn", "n");
    console.log('User logged OUT')
    setShowPopup(false);
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleCancelPopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="options-list-profile">
      <div>
        <h5>Logout</h5>
      </div>
      <hr />
      <div>
        Are you sure you want to log out? Logging out will terminate your
        current session, and you will no longer have access to your account
        until you log back in again.
        <div style={{ height: "10px" }}></div>
        <button
          onClick={() => {
            handleCancelTask();
          }}
        >
          Logout
        </button>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Confirm your decision</h3>
            <p>Are you sure you want to logout from your account?</p>
            <div className="popup-buttons">
              <button onClick={handleConfirmCancel}>Yes, Logout</button>
              <button onClick={handleCancelPopup}>Never mind</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
