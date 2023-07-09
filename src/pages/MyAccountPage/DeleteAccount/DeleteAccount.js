import React, { useState } from "react";
import "../ScheduledTask/ScheduledTask.css";

const DeleteAccount = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCancelTask = () => {
    setShowPopup(true);
  };

  const handleConfirmCancel = () => {
    setShowPopup(false);
  };

  const handleCancelPopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="options-list-profile">
      <div>
        <h5>Account Deletion</h5>
      </div>
      <hr />
      <div>
        Once you've deleted your account, you will no longer be able to log in
        to the TaskRabbit site or apps. This action cannot be undone.
        <div style={{ height: "10px" }}></div>
        <button
          onClick={() => {
            handleCancelTask();
          }}
        >
          Delete Account
        </button>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Confirm your decision</h3>
            <p>Are you sure you want to delete your account?</p>
            <div className="popup-buttons">
              <button onClick={handleConfirmCancel}>Yes, I'm sure</button>
              <button onClick={handleCancelPopup}>Never mind</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
