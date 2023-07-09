import React, { useState } from 'react';
import './ScheduledTask.css'

const ScheduledTasks = () => {
  // Dummy data for scheduled tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'House Cleaning',
      date: '2023-07-10',
      time: '10:00 AM',
      provider: 'John Doe Cleaning Services',
    },
    {
      id: 2,
      title: 'Car Repairs',
      date: '2023-07-12',
      time: '2:00 PM',
      provider: 'Smith Auto Repair',
    },
    // Add more tasks here
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [cancelTaskId, setCancelTaskId] = useState(null);

  const handleCancelTask = (taskId) => {
    setCancelTaskId(taskId);
    setShowPopup(true);
  };

  const handleConfirmCancel = () => {
    // Remove the task from the list
    setTasks(tasks.filter(task => task.id !== cancelTaskId));
    setShowPopup(false);
  };

  const handleCancelPopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="scheduled-tasks">
      <h2>Scheduled Tasks</h2>
      {tasks.length > 0 ? (
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className="task-item">
              <div className="task-info">
                <h3>{task.title}</h3>
                <p>Date: {task.date}</p>
                <p>Time: {task.time}</p>
                <p>Provider: {task.provider}</p>
                <button onClick={() => handleCancelTask(task.id)}>Cancel Task</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks scheduled.</p>
      )}

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Confirm Cancellation</h3>
            <p>Are you sure you want to cancel this task?</p>
            <div className="popup-buttons">
              <button onClick={handleConfirmCancel}>Yes, Cancel</button>
              <button onClick={handleCancelPopup}>No, Keep Task</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduledTasks;