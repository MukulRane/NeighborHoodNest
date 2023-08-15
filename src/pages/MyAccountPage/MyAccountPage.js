import React, { useState } from "react";
import Profile from "./Profile/Profile";
import Password from "./Password/Password";
import ScheduledTasks from "./ScheduledTask/ScheduledTask";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import Logout from "./Logout/Logout";
import "./MyAccountPage.css";
import MyTasks from "./MyTask/MyTask";
import CancelledTasks from "./CancelledTasks/CancelledTasks";

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
            className={selectedOption === "pendingOrders" ? "active" : ""}
            onClick={() => handleOptionClick("pendingOrders")}
          >
            Pending Orders
          </li>
          <li
            className={selectedOption === "confirmedOrders" ? "active" : ""}
            onClick={() => handleOptionClick("confirmedOrders")}
          >
            Confirmed Orders
          </li>
          <li
            className={selectedOption === "cancelledOrders" ? "active" : ""}
            onClick={() => handleOptionClick("cancelledOrders")}
          >
            Cancelled Orders
          </li>
          <li
            className={selectedOption === "deleteAccount" ? "active" : ""}
            onClick={() => handleOptionClick("deleteAccount")}
          >
            Delete Account
          </li>
          <li
            className={selectedOption === "logout" ? "active" : ""}
            onClick={() => handleOptionClick("logout")}
          >
            Logout
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
            ) : selectedOption === "pendingOrders" ? (
              <ScheduledTasks />
            ) : selectedOption === "confirmedOrders" ? (
              <MyTasks />
            ) : selectedOption === "cancelledOrders" ? (
              <CancelledTasks />
            ) : selectedOption === "deleteAccount" ? (
              <DeleteAccount />
            ) : selectedOption === "logout" ? (
              <Logout />
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
