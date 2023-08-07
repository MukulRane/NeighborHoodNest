import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ServiceProviderPage.css";
import ServiceProviderCheckbox from "../../components/ServiceProviderCheckbox/ServiceProviderCheckbox";
import HorizontalRuleWithText from "../../components/HorizontalRuleWithText/HorizontalRuleWithText";
import ServiceProviderSlotDropdown from "../../components/ServiceProviderSlotDropdown/ServiceProviderSlotDropdown";
import PriceRangeSlider from "../../components/PriceRangeSlider/PriceRangeSlider";
import { FaStar } from "react-icons/fa";
import ServiceProviderProfileModal from "../../modals/ServiceProviderProfile/ServiceProviderProfileModal";
import SlotSelection from "../../modals/SlotSelection/SlotSelection";
import ReactModal from "react-modal";
import ErrorModal from "../../components/UIElements/ErrorModal/ErrorModal";
import LoadingSpinner from "../../components/UIElements/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../hooks/http-hooks";

const ServiceProviderPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subCategoryId = queryParams.get("subCategoryId");
  console.log("subCategoryId in page = " + subCategoryId);
  const [serviceProvidersData, setServiceProvidersData] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const [isViewProfileClicked, setIsViewProfileClicked] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const handleCheckboxChange1 = (event) => {
    setIsChecked1(event.target.checked);
  };

  const handleCheckboxChange2 = (event) => {
    setIsChecked2(event.target.checked);
  };

  const handleCheckboxChange3 = (event) => {
    setIsChecked3(event.target.checked);
  };

  const options = [
    { value: "option1", label: "I'm Flexible" },
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

  const fetchServiceProviders = async () => {
    try {
      console.log("subCategoryId in try = " + subCategoryId);
      const responseData = await sendRequest(
        `http://localhost:5000/api/serviceProvider/subCategory/${subCategoryId}`
      );

      setServiceProvidersData(responseData.serviceProvider);
      console.log("serviceProvidersData = " + serviceProvidersData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchServiceProviders();
  }, []);

  const handleDropdownChange = (event) => {
    console.log(event.target.value);
  };

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />

      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && (
        <div className="service-providers-div">
          <div className="service-providers-filters">
            <div className="service-providers-filters-card">
              <div className="service-providers-filters-card-label">
                <b>Date</b>
              </div>
              <div style={{ height: "20px" }}></div>
              <div className="service-providers-filters-card-flat-buttons">
                <button
                  className={`flat-button ${
                    activeButton === "button1" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("button1")}
                >
                  Today
                </button>
                <button
                  className={`flat-button ${
                    activeButton === "button2" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("button2")}
                >
                  Within 3 Days
                </button>
                <button
                  className={`flat-button ${
                    activeButton === "button3" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("button3")}
                >
                  Within a Week
                </button>
                <button
                  className={`flat-button ${
                    activeButton === "button4" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("button4")}
                >
                  Choose Dates
                </button>
              </div>
              <div style={{ height: "10px" }}></div>
              <hr className="service-providers-filters-card-hr" />
              <div style={{ height: "30px" }}></div>
              <div className="service-providers-filters-card-label">
                <b>Time of the day</b>
              </div>
              <div style={{ height: "20px" }}></div>
              <div>
                <ServiceProviderCheckbox
                  label="Morning (8am - 12pm)"
                  checked={isChecked1}
                  onChange={handleCheckboxChange1}
                />
                <ServiceProviderCheckbox
                  label="Afternoon (12pm - 5pm)"
                  checked={isChecked2}
                  onChange={handleCheckboxChange2}
                />
                <ServiceProviderCheckbox
                  label="Evening (5pm - 9:30pm)"
                  checked={isChecked3}
                  onChange={handleCheckboxChange3}
                />
                <div style={{ height: "10px" }}></div>
                <HorizontalRuleWithText text="or choose a specific time" />
                <div style={{ height: "20px" }}></div>
                <ServiceProviderSlotDropdown
                  options={options}
                  defaultValue={options[0].value}
                  onChange={handleDropdownChange}
                />
                <div style={{ height: "10px" }}></div>
                <hr className="service-providers-filters-card-hr" />
                <div style={{ height: "30px" }}></div>
                <div className="service-providers-filters-card-label">
                  <b>Price</b>
                </div>
                <div style={{ height: "20px" }}></div>
                <PriceRangeSlider />
                <div style={{ height: "50px" }}></div>
              </div>
            </div>
          </div>

          <div className="service-providers-display">
            {serviceProvidersData &&
              serviceProvidersData.map((serviceProvider, index) => {
                return (
                  <div className="service-providers-display-card">
                    <div className="service-providers-display-card-profile-reviews">
                      <div className="profile-image">
                        <img
                          src={serviceProvider.profileUrl}
                          alt="Profile"
                          className="profile-image-image"
                        />
                      </div>
                      <div style={{ height: "10px" }}></div>
                      <b
                        className="magenta"
                        onClick={() => {
                          setIsViewProfileClicked(true);
                          setModalOpen(true);
                        }}
                      >
                        View Profile & Reviews
                      </b>
                      <div>
                        <ReactModal
                          contentLabel="Modal"
                          isOpen={modalOpen}
                          style={{
                            content: {
                              width: "50%",
                              height: "90%",
                              top: "50%",
                              left: "50%",
                              right: "auto",
                              bottom: "auto",
                              marginRight: "-50%",
                              transform: "translate(-50%, -50%)",
                            },
                          }}
                          onRequestClose={() => setModalOpen(false)}
                        >
                          {isViewProfileClicked ? (
                            <ServiceProviderProfileModal />
                          ) : (
                            <SlotSelection />
                          )}
                        </ReactModal>
                      </div>
                      <div style={{ height: "10px" }}></div>
                      <button
                        className="book-button"
                        onClick={() => {
                          setIsViewProfileClicked(false);
                          setModalOpen(true);
                        }}
                      >
                        Select & Continue
                      </button>
                      <div style={{ height: "10px" }}></div>
                      <div className="tasker-text-align">
                        You can chat with your Tasker, adjust task details, or
                        change task time after booking.
                      </div>
                    </div>
                    <div className="service-providers-display-card-about">
                      <div className="service-providers-display-card-about-name-price">
                        <h4>
                          {serviceProvider.firstName +
                            " " +
                            serviceProvider.lastName[0].toUpperCase() +
                            "."}
                        </h4>
                        <h4>
                          {serviceProvider.services[0].price
                            ? "$" + serviceProvider.services[0].price + "/hr"
                            : "Contact " +
                              serviceProvider.firstName +
                              " for the rate"}
                        </h4>
                      </div>
                      <div style={{ height: "20px" }}></div>
                      <div>
                        <span>
                          <FaStar name="star" size="15" />
                        </span>{" "}
                        4.9 (116 reviews)
                      </div>
                      <div>194 Cleaning tasks</div>
                      <div>204 Cleaning tasks overall</div>
                      <div style={{ height: "20px" }}></div>
                      <div className="service-providers-display-card-about-rounded-div">
                        <div>How I can help:</div>
                        <div style={{ height: "10px" }}></div>
                        <div>
                          {serviceProvider.services[0].skillsAndExperiences}
                        </div>
                        <div style={{ height: "5px" }}></div>
                        <div>Read More</div>
                      </div>
                      <div style={{ height: "20px" }}></div>
                      <div className="service-providers-display-card-review">
                        <div className="service-providers-display-card-review-profile-temp">
                          <div className="service-providers-display-card-review-profile">
                            <img
                              src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                              alt="Profile"
                              className="profile-image-image"
                            />
                          </div>
                        </div>
                        <div className="service-providers-display-card-review-review">
                          <div className="service-providers-display-card-review-review-name-date">
                            Michael E. on Fri, Jun 16
                          </div>
                          <div style={{ height: "10px" }}></div>
                          <div className="service-providers-display-card-review-review-review">
                            "Nya was on time, had a great personality, and did a
                            wonderful job getting my showers,glass and floors
                            clean. Would use again for sure. "
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ServiceProviderPage;
