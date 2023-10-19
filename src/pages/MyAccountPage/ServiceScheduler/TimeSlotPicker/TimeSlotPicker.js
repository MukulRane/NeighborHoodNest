import React, { useState, useEffect } from "react";
import "./TimeSlotPicker.css";
import { useHttpClient } from "../../../../hooks/http-hooks";
import ErrorModal from "../../../../components/UIElements/ErrorModal/ErrorModal";
import LoadingSpinner from "../../../../components/UIElements/LoadingSpinner/LoadingSpinner";

const TimeSlotPicker = ({
  service,
  date,
  sCID,
  onSelectTimeSlot,
  serProData,
  sendDataBack,
}) => {
  const timeSlots = [
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

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [selectedSlots, setSelectedSlots] = useState(
    serProData
      .filter((service) => service.subCategoryID === sCID)[0]
      .availability.filter((service) => service.date === date.toString())[0]
      ?.times
  );

  const handleSlotToggle = (slot) => {
    if (selectedSlots.includes(slot)) {
      setSelectedSlots(
        selectedSlots.filter((selectedSlot) => selectedSlot !== slot)
      );
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const handleAddAvailability = async (event) => {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        "https://neighborhoodnest-backend-mrane.onrender.com/api/serviceProvider/availability",
        "POST",
        JSON.stringify({
          serviceProviderID: localStorage.getItem("userId"),
          subCategoryID: sCID,
          date: date.toString(),
          times: selectedSlots,
        }),
        { "Content-Type": "application/json" }
      );
      sendDataBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSaveSlots = (event) => {
    handleAddAvailability(event);
  };

  useEffect(() => {
    const updatedSelectedSlots = serProData
      .filter((service) => service.subCategoryID === sCID)[0]
      .availability.filter(
        (service) => service.date === date.toString()
      )[0]?.times;
    setSelectedSlots(updatedSelectedSlots || []);
  }, [sCID, serProData, date]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <div className="time-slot-picker">
        <h3>
          Select available time slots for {service} on {date.toDateString()}:
        </h3>
        <ul>
          {selectedSlots && timeSlots.map((timeSlot) => {
            return (
              <li key={timeSlot.value}>
                <label>
                  <input
                    type="checkbox"
                    value={timeSlot.label}
                    onChange={() => handleSlotToggle(timeSlot.label)}
                    checked={selectedSlots.includes(timeSlot.label)}
                  />
                  {timeSlot.label}
                </label>
              </li>
            );
          })}
        </ul>
        {selectedSlots && <div className="save-button-container">
          <button
            className="save-button"
            onClick={handleSaveSlots}
            disabled={selectedSlots.length === 0}
          >
            Save
          </button>
        </div>}
      </div>
    </React.Fragment>
  );
};

export default TimeSlotPicker;
