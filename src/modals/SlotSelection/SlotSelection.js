import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ServiceProviderSlotDropdown from "../../components/ServiceProviderSlotDropdown/ServiceProviderSlotDropdown";
import "./SlotSelection.css";
import { useHttpClient } from "../../hooks/http-hooks";
import ErrorModal from "../../components/UIElements/ErrorModal/ErrorModal";
import LoadingSpinner from "../../components/UIElements/LoadingSpinner/LoadingSpinner";

const SlotSelection = ({ serviceProviderData }) => {
  console.log("serviceProviderData = " + JSON.stringify(serviceProviderData));
  const [timeAvailable, setTimeAvailable] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleCalendarChange = (date) => {
    setSelectedDate(date.toString());
    const availableTimes = serviceProviderData.services[0].availability.find(
      (item) => item.date.includes(date.toString())
    ).times;
    const matchingOptions = options.filter((option) =>
      availableTimes.includes(option.label)
    );
    setSelectedTime(matchingOptions[0].label);
    setTimeAvailable(matchingOptions);
  };

  const handleDropdownChange = (event) => {
    const timeSelected = options.find(
      (val) => val.value === event.target.value
    );
    setSelectedTime(timeSelected.label);
  };

  const datesArray = [];
  serviceProviderData.services.forEach((service) => {
    service.availability.forEach((avail) => {
      datesArray.push(new Date(avail.date));
    });
  });

  const tileDisabled = ({ date }) =>
    !datesArray.some(
      (activeDate) => activeDate.toDateString() === date.toDateString()
    );

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const handleBookSlot = async () => {

    try {
      const responseData = await sendRequest(
        "http://localhost:5000/api/booking",
        "POST",
        JSON.stringify({
          customerID: localStorage.getItem("userId"),
          serviceProviderID: serviceProviderData._id,
          categoryID: serviceProviderData.services[0].categoryID,
          subCategoryID: serviceProviderData.services[0].subCategoryID,
          date: selectedDate,
          time: selectedTime,
        }),
        { "Content-Type": "application/json" }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const options = [
    { value: "option2", label: "8:00 am" },
    { value: "option3", label: "8:30 am" },
    { value: "option4", label: "9:00 am" },
    { value: "option5", label: "9:30 am" },
    { value: "option6", label: "10:00 am" },
    { value: "option7", label: "10:30 am" },
    { value: "option8", label: "11:00 am" },
    { value: "option9", label: "11:30 am" },
    { value: "option10", label: "12:00 pm" },
    { value: "option11", label: "12:30 pm" },
    { value: "option12", label: "1:00 pm" },
    { value: "option13", label: "1:30 pm" },
    { value: "option14", label: "2:00 pm" },
    { value: "option15", label: "2:30 pm" },
    { value: "option16", label: "3:00 pm" },
    { value: "option17", label: "3:30 pm" },
    { value: "option18", label: "4:00 pm" },
    { value: "option19", label: "4:30 pm" },
    { value: "option20", label: "5:00 pm" },
    { value: "option21", label: "5:30 pm" },
    { value: "option22", label: "6:00 pm" },
    { value: "option23", label: "6:30 pm" },
    { value: "option24", label: "7:00 pm" },
    { value: "option25", label: "7:30 pm" },
    { value: "option26", label: "8:00 pm" },
    { value: "option27", label: "8:30 pm" },
    { value: "option28", label: "9:00 pm" },
    { value: "option29", label: "9:30 pm" },
  ];

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <div>
        <div className="slot-selection-title">
          Choose your task date and start time:
        </div>
        <div className="slot-selection-main">
          <div className="slot-selection-left">
            <div className="slot-selection-profile-text">
              <div className="service-providers-display-card-review-profile">
                <img
                  src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="Profile"
                  className="profile-image-image"
                />
              </div>
              <div>Nya C.'s Availability</div>
            </div>

            <div>
              <Calendar
                onChange={handleCalendarChange}
                value={null}
                tileDisabled={tileDisabled}
              />
            </div>
            <div>
              {timeAvailable && timeAvailable.length > 0 ? (
                <ServiceProviderSlotDropdown
                  options={timeAvailable}
                  onChange={handleDropdownChange}
                />
              ) : null}
            </div>
            <div>
              You can chat to adjust task details or change start time after
              confirming.
            </div>
          </div>
          <div className="slot-selection-right">
            <div>Request for:</div>
            <div>
              {new Date(selectedDate).toDateString()}
              {selectedDate !== "" ? "," : ""} {selectedTime}
            </div>
            <div>
              <button
                className="book-button"
                onClick={() => {
                  handleBookSlot();
                }}
                disabled={selectedDate === ""}
              >
                Book
              </button>
            </div>
            <div>
              This will send a request to the service provider. Upon accepting,
              you will be notified.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SlotSelection;
