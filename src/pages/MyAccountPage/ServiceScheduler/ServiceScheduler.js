import React, { useState, useEffect } from "react";
import Calendar from "./Calendar";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";
import "./ServiceSchedular.css";
import ErrorModal from "../../../components/UIElements/ErrorModal/ErrorModal";
import LoadingSpinner from "../../../components/UIElements/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../../hooks/http-hooks";

const ServiceScheduler = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [serviceProviderData, setServiceProviderData] = useState(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);

  const handleServiceSelection = (service) => {
    setSelectedService(service);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  const handleTimeSlotSelection = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleServiceProviderData = () => {
    fetchUserProfile()
  };

  const fetchUserProfile = async () => {
    try {
      const responseData = await sendRequest(
        `http://localhost:5000/api/serviceProvider/serviceProvider/${localStorage.getItem(
          "userId"
        )}`
      );
      setServiceProviderData(responseData.serviceProvider[0].services);
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
      <div className="service-scheduler">
        <div className="service-selection">
          <h2>Select a service:</h2>
          <ul>
            {serviceProviderData &&
              serviceProviderData.map((serviceProviderData) => {
                return (
                  <li key={serviceProviderData.subCategoryID}>
                    <button
                      onClick={() => {
                        setSelectedSubCategoryId(
                          serviceProviderData.subCategoryID
                        );
                        handleServiceSelection(
                          serviceProviderData.subCategoryName
                        );
                      }}
                      className={
                        selectedService === serviceProviderData.subCategoryName
                          ? "selected"
                          : ""
                      }
                    >
                      {serviceProviderData.subCategoryName}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
        {selectedService && (
          <div className="scheduler-container">
            <h2>Schedule for {selectedService}</h2>
            <Calendar onSelectDate={handleDateSelection} />
            {selectedDate && (
              <TimeSlotPicker
                service={selectedService}
                date={selectedDate}
                sCID={selectedSubCategoryId}
                onSelectTimeSlot={handleTimeSlotSelection}
                serProData={serviceProviderData}
                sendDataBack={handleServiceProviderData}
              />
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ServiceScheduler;
