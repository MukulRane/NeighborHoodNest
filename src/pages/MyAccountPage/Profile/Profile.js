import React, { useState } from "react";
import { FaPersonBooth } from "react-icons/fa";
import './Profile.css'

const Profile = () => {

    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Mukul Rane");
    const [email, setEmail] = useState("rane.mukul@gmail.com");
    const [phone, setPhone] = useState("+1 6028422139");
    const [zipcode, setZipcode] = useState("85212");
    
    const handleEditClick = () => {
        setEditMode(true);
      };
    
      const handleSaveClick = () => {
        setEditMode(false);
      };

    return <div className="options-list-profile">
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
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
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
        <button onClick={()=>{}}>Logout</button>
      </div>
    </div>
  </div>
}

export default Profile;