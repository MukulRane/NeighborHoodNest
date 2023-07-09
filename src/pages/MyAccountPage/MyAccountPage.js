import React, { useState } from "react";
import Profile from "./Profile/Profile";
import Password from "./Password/Password";
import ScheduledTasks from "./ScheduledTask/ScheduledTask";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import "./MyAccountPage.css";

const MyAccountPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="my-account-page">
      <div className="options-section">
        <ul className="options-list">
          <li
            className={selectedOption === "profile" ? "active" : ""}
            onClick={() => handleOptionClick("profile")}
          >
            Profile
          </li>
          <li
            className={selectedOption === "password" ? "active" : ""}
            onClick={() => handleOptionClick("password")}
          >
            Password
          </li>
          <li
            className={selectedOption === "myTasks" ? "active" : ""}
            onClick={() => handleOptionClick("myTasks")}
          >
            My Tasks
          </li>
          <li
            className={selectedOption === "deleteAccount" ? "active" : ""}
            onClick={() => handleOptionClick("deleteAccount")}
          >
            Delete Account
          </li>
        </ul>
      </div>

      <div className="details-section">
        {selectedOption && (
          <div className="details-container">
            {selectedOption === "profile" ? (
              <Profile />
            ) : selectedOption === "password" ? (
              <Password />
            ) : selectedOption === "myTasks" ? (
              <ScheduledTasks />
            ) : selectedOption === "deleteAccount" ? (
              <DeleteAccount />
            ) : (
              <h3>{selectedOption}</h3>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAccountPage;
