import React, { useState } from "react";
import '../Profile/Profile.css'
import './Password.css'

const Password = () => {

    const [editMode, setEditMode] = useState(false);
    const [password, setName] = useState("Mukul Rane");
    
    const handleEditClick = () => {
        setEditMode(true);
      };
    
      const handleSaveClick = () => {
        setEditMode(false);
      };

    return <div className="options-list-profile">
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
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <h4>{'*'.repeat(password.length)}</h4>
          )}
    </div>
  </div>
}

export default Password;