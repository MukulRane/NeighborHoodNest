import React, { useState, useEffect } from "react";
import { FaPersonBooth } from "react-icons/fa";
import "./Profile.css";
import ErrorModal from "../../../components/UIElements/ErrorModal/ErrorModal";
import LoadingSpinner from "../../../components/UIElements/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../../hooks/http-hooks";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [zipcode, setZipcode] = useState();
  const [profileUrl, setProfileUrl] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const handleEditClick = () => {
    setEditMode(true);
  };

  const updateUserHandler = async () => {
    const nameArray = name.split(" ");
    const first = nameArray.slice(0, -1).join(" ");
    const last = nameArray[nameArray.length - 1];
    try {
      await sendRequest(
        JSON.parse(localStorage.getItem("isUser"))
          ? `http://localhost:5000/api/userSignup/${localStorage.getItem(
              "userId"
            )}`
          : `http://localhost:5000/api/serviceProvider/${localStorage.getItem(
              "userId"
            )}`,
        "PATCH",
        JSON.stringify({
          firstName: first,
          lastName: last,
          email: email,
          phoneNumber: phone,
          pinCode: parseInt(zipcode),
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
          ? `http://localhost:5000/api/userSignup/${localStorage.getItem(
              "userId"
            )}`
          : `http://localhost:5000/api/serviceProvider/${localStorage.getItem(
              "userId"
            )}`
      );
      if (JSON.parse(localStorage.getItem("isUser"))) {
        setName(responseData.user.firstName + " " + responseData.user.lastName);
        setEmail(responseData.user.email);
        setPhone(responseData.user.phoneNumber);
        setZipcode(responseData.user.pinCode);
        setProfileUrl(responseData.user.profileUrl);
      } else {
        setName(
          responseData.serviceProvider[0].firstName +
            " " +
            responseData.serviceProvider[0].lastName
        );
        setEmail(responseData.serviceProvider[0].email);
        setPhone(responseData.serviceProvider[0].phoneNumber);
        setZipcode(responseData.serviceProvider[0].pinCode);
        setProfileUrl(responseData.serviceProvider[0].profileUrl);
      }
    } catch (err) {
      console.log(err);
    }
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
      {!isLoading && name && (
        <div className="options-list-profile">
          <div className="options-list-head">
            <h5>Account</h5>
            {editMode ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <button onClick={handleEditClick}>Edit</button>
            )}
          </div>
          <hr />
          <div className="options-list-body">
            <div className="options-list-body-image">
              <div className="profile-image">
                <img
                  src={profileUrl}
                  alt="Profile"
                  className="profile-image-image"
                />
              </div>
            </div>

            <div className="options-list-body-details">
              <div className="options-list-body-details-group">
                <FaPersonBooth name="FaPersonBooth" size="20" />
                <div style={{ width: "10px" }}></div>
                {editMode ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <h4>{name}</h4>
                )}
              </div>
              <div className="options-list-body-details-group">
                <FaPersonBooth name="FaPersonBooth" size="20" />
                <div style={{ width: "10px" }}></div>
                {editMode ? (
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ) : (
                  <h4>{email}</h4>
                )}
              </div>
              <div className="options-list-body-details-group">
                <FaPersonBooth name="FaPersonBooth" size="20" />
                <div style={{ width: "10px" }}></div>
                {editMode ? (
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                ) : (
                  <h4>{phone}</h4>
                )}
              </div>
              <div className="options-list-body-details-group">
                <FaPersonBooth name="FaPersonBooth" size="20" />
                <div style={{ width: "10px" }}></div>
                {editMode ? (
                  <input
                    type="text"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                ) : (
                  <h4>{zipcode}</h4>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Profile;
