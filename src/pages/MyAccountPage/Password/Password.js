import React, { useState, useEffect } from "react";
import "../Profile/Profile.css";
import "./Password.css";
import ErrorModal from "../../../components/UIElements/ErrorModal/ErrorModal";
import LoadingSpinner from "../../../components/UIElements/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../../hooks/http-hooks";

const Password = () => {
  const [editMode, setEditMode] = useState(false);
  const [password, setPassword] = useState("Mukul Rane");

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const handleEditClick = () => {
    setEditMode(true);
  };

  const updateUserHandler = async () => {
    try {
      await sendRequest(
        JSON.parse(localStorage.getItem("isUser"))
          ? `https://neighborhoodnest-backend-mrane.onrender.com/api/userSignup/${localStorage.getItem(
              "userId"
            )}`
          : `https://neighborhoodnest-backend-mrane.onrender.com/api/serviceProvider/${localStorage.getItem(
              "userId"
            )}`,
        "PATCH",
        JSON.stringify({
          password: password,
        }),
        { "Content-Type": "application/json" }
      );
    } catch (err) {}
  };

  const handleSaveClick = () => {
    updateUserHandler();
    setEditMode(false);
  };

  const fetchUserProfile = async () => {
    try {
      const responseData = await sendRequest(
        JSON.parse(localStorage.getItem("isUser"))
          ? `https://neighborhoodnest-backend-mrane.onrender.com/api/userSignup/${localStorage.getItem(
              "userId"
            )}`
          : `https://neighborhoodnest-backend-mrane.onrender.com/api/serviceProvider/${localStorage.getItem(
              "userId"
            )}`
      );
      if (JSON.parse(localStorage.getItem("isUser"))) {
        setPassword(responseData.user.password);
      } else {
        setPassword(responseData.serviceProvider[0].password);
      }
    } catch (err) {}
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (
        <div className="options-list-profile">
          <div className="options-list-head">
            <h5>Change Password</h5>
            {editMode ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <button onClick={handleEditClick}>Edit</button>
            )}
          </div>
          <hr />
          <div className="options-list-body-password">
            <h4>Current Password:</h4>
            <div style={{ width: "10px" }}></div>
            {editMode ? (
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            ) : (
              <h4>{"*".repeat(password.length)}</h4>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Password;
