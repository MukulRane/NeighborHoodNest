import React, { useState } from 'react';
import './MyAccountPage.css'

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
            className={selectedOption === 'profile' ? 'active' : ''}
            onClick={() => handleOptionClick('profile')}
          >
            Profile
          </li>
          <li
            className={selectedOption === 'password' ? 'active' : ''}
            onClick={() => handleOptionClick('password')}
          >
            Password
          </li>
          <li
            className={selectedOption === 'myTasks' ? 'active' : ''}
            onClick={() => handleOptionClick('myTasks')}
          >
            My Tasks
          </li>
          <li
            className={selectedOption === 'cancelTask' ? 'active' : ''}
            onClick={() => handleOptionClick('cancelTask')}
          >
            Cancel a Task
          </li>
          <li
            className={selectedOption === 'deleteAccount' ? 'active' : ''}
            onClick={() => handleOptionClick('deleteAccount')}
          >
            Delete Account
          </li>
        </ul>
      </div>

      <div className="details-section">
        {selectedOption && (
          <div className="details-container">
            <h3>{selectedOption}</h3>
            {/* Display relevant details based on the selected option */}
            {/* Example: You can add different components or content here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAccountPage;
