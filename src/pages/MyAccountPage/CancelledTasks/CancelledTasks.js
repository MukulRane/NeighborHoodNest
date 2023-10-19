import React, { useState, useEffect } from "react";
import "../ScheduledTask/ScheduledTask.css";
import ErrorModal from "../../../components/UIElements/ErrorModal/ErrorModal";
import LoadingSpinner from "../../../components/UIElements/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../../hooks/http-hooks";

const CancelledTasks = () => {
  const [tasks, setTasks] = useState(null);

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
          <h2>Scheduled Tasks</h2>
          {tasks.length > 0 ? (
            <ul className="task-list">
              {tasks.map((task) => {
                return (
                  (task.booking.status === 'CancelledBySP' || task.booking.status === 'CancelledByUser') && <li key={task.booking._id} className="task-item">
                    {!JSON.parse(localStorage.getItem("isUser")) ? <div className="task-info">
                      <h3>{task.title}</h3>
                      <p>Date: {new Date(task.booking.date).toDateString()}</p>
                      <p>Time: {task.booking.time}</p>
                      <p>
                        Customer:{" "}
                        {task.customer.firstName + " " + task.customer.lastName}
                      </p>
                      <p>Email: {task.customer.email}</p>
                      <p>Phone no.: {task.customer.phoneNumber}</p>
                      <p>Address: {task.customer.address}</p>
                      <p>Zip Code: {task.customer.pinCode}</p>
                      <p>CancelledBy: {task.booking.status === 'CancelledBySP' ? 'You' : 'Customer'}</p>
                    </div> : <div className="task-info">
                      <h3>{task.title}</h3>
                      <p>Date: {new Date(task.booking.date).toDateString()}</p>
                      <p>Time: {task.booking.time}</p>
                      <p>
                      Service Provider:{" "}
                            {task.serviceProvider.firstName +
                              " " +
                              task.serviceProvider.lastName}
                      </p>
                      <p>Email: {task.serviceProvider.email}</p>
                      <p>Phone no.: {task.serviceProvider.phoneNumber}</p>
                      <p>CancelledBy: {task.booking.status === 'CancelledByUser' ? 'You' : 'Customer'}</p>
                    </div>}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No tasks scheduled.</p>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default CancelledTasks;
