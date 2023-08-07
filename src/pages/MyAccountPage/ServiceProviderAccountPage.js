import React, { useState } from "react";
import Profile from "./Profile/Profile";
import Password from "./Password/Password";
import ServiceScheduler from "./ServiceScheduler/ServiceScheduler";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import Logout from "./Logout/Logout";
import "./ServiceProviderAccountPage.css";

const ServiceProviderAccountPage = () => {
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
            className={selectedOption === "serviceScheduler" ? "active" : ""}
            onClick={() => handleOptionClick("serviceScheduler")}
          >
            Service Schedule
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
            ) : selectedOption === "serviceScheduler" ? (
              <ServiceScheduler />
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

export default ServiceProviderAccountPage;
