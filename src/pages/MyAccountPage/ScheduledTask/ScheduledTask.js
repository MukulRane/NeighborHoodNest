import React, { useState, useEffect } from "react";
import "./ScheduledTask.css";
import ErrorModal from "../../../components/UIElements/ErrorModal/ErrorModal";
import LoadingSpinner from "../../../components/UIElements/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../../hooks/http-hooks";

const ScheduledTasks = () => {
  const [tasks, setTasks] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  const [cancelTaskId, setCancelTaskId] = useState(null);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const fetchUserProfile = async () => {
    try {
      const responseData = await sendRequest(
        JSON.parse(localStorage.getItem("isUser"))
          ? `https://neighborhoodnest-backend-mrane.onrender.com/api/booking/user/${localStorage.getItem(
              "userId"
            )}`
          : `https://neighborhoodnest-backend-mrane.onrender.com/api/booking/serviceProvider/${localStorage.getItem(
              "userId"
            )}`
      );
      setTasks(responseData.bookingDetails);
    } catch (err) {
      console.log(err);
    }
  };

  const updateBookingStatus = async (bookingID, status) => {
    try {
      const responseData = await sendRequest(
        `https://neighborhoodnest-backend-mrane.onrender.com/api/booking/${bookingID}`,
        "PATCH",
        JSON.stringify({
          status: status,
        }),
        { "Content-Type": "application/json" }
      );

      fetchUserProfile();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelTask = (taskId) => {
    setCancelTaskId(taskId);
    setShowPopup(true);
  };

  const handleConfirmAccept = (bookingID) => {
    updateBookingStatus(bookingID, "Accepted");
  };

  const handleConfirmCancel = () => {
    // setTasks(tasks.filter((task) => task.id !== cancelTaskId));
    updateBookingStatus(cancelTaskId, "CancelledBySP");
    setShowPopup(false);
  };

  const handleCancelPopup = () => {
    setShowPopup(false);
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
      {!isLoading && tasks && (
        <div className="scheduled-tasks">
          {!JSON.parse(localStorage.getItem("isUser")) ? <h2>Pending Tasks</h2> : <h2>Pending Order</h2>}
          {tasks.length > 0 ? (
            <ul className="task-list">
              {tasks.map((task) => {
                return (
                  task.booking.status === "N/A" && (
                    <li key={task.booking._id} className="task-item">
                      <div className="task-info">
                        <h3>{task.title}</h3>
                        <p>
                          Date: {new Date(task.booking.date).toDateString()}
                        </p>
                        <p>Time: {task.booking.time}</p>
                        {!JSON.parse(localStorage.getItem("isUser")) ? (
                          <p>
                            Customer:{" "}
                            {task.customer.firstName +
                              " " +
                              task.customer.lastName}
                          </p>
                        ) : (
                          <p>
                            Service Provider:{" "}
                            {task.serviceProvider.firstName +
                              " " +
                              task.serviceProvider.lastName}
                          </p>
                        )}
                        <p>Email: {!JSON.parse(localStorage.getItem("isUser")) ? task.customer.email : task.serviceProvider.email}</p>
                        <p>Phone no.: {!JSON.parse(localStorage.getItem("isUser")) ? task.customer.phoneNumber : task.serviceProvider.phoneNumber}</p>
                        {!JSON.parse(localStorage.getItem("isUser")) ? <p>Address: {task.serviceProvider.address}</p> : null}
                        {!JSON.parse(localStorage.getItem("isUser")) ? <p>Zip Code: {task.serviceProvider.pinCode}</p> : null}
                        {!JSON.parse(localStorage.getItem("isUser")) && (
                          <div className="task-buttons">
                            <button
                              className="accept-button"
                              onClick={() => {
                                handleConfirmAccept(task.booking._id);
                              }}
                            >
                              Accept
                            </button>
                            <button
                              className="reject-button"
                              onClick={() => handleCancelTask(task.booking._id)}
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </div>
                    </li>
                  )
                );
              })}
            </ul>
          ) : (
            <p>No tasks scheduled.</p>
          )}

          {showPopup && (
            <div className="popup" onClick={handleCancelPopup}>
              <div
                className="popup-content"
                onClick={(e) => e.stopPropagation()}
              >
                <h3>Confirm Cancellation</h3>
                <p>Are you sure you want to cancel this task?</p>
                <div className="popup-buttons">
                  <button
                    className="confirm-button"
                    onClick={handleConfirmCancel}
                  >
                    Yes, Cancel
                  </button>
                  <button className="cancel-button" onClick={handleCancelPopup}>
                    No, Keep Task
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default ScheduledTasks;
