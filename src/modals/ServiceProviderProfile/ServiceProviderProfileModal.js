import React from "react";
import "../../modals/ServiceProviderProfile/ServiceProviderProfileModal.css";
import "../../pages/ServiceProviderPage/ServiceProviderPage.css";
import { FaStar } from "react-icons/fa";
import PhotosTiles from "../../components/PhotosTiles/PhotosTiles";

const ServiceProviderProfileModal = () => {
  return (
    <div>
      <div className="service-provider-profile-modal-div">
        <div className="service-provider-profile-modal-space-between">
          <div className="service-providers-display-card-review-profile">
            <img
              src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Profile"
              className="profile-image-image"
            />
          </div>
          <div className="service-provider-profile-modal-name-review">
            <h4>Nya C.</h4>
            <div style={{ height: "10px" }}></div>
            <div>
              <span>
                <FaStar name="star" size="15" />
              </span>{" "}
              4.9 (116 reviews)
            </div>
          </div>
        </div>

        <div className="service-provider-profile-modal-price-button">
          <h4>$45.23/hr</h4>
          <div style={{ height: "10px" }}></div>
          <button className="book-button" onClick={() => {}}>
            Select & Continue
          </button>
        </div>
      </div>
      <div className="service-provider-profile-modal-about-me">
        <h5>About Me</h5>
        <p>
          I am a full time tasker to help support my business. I am detail
          oriented, efficient, polite, adaptable and reliable. I am able to help
          with what ever you need plus my hours are extremely flexible! I have
          experience in painting, cleaning, arts and crafts, data entry, working
          with people, organizing, multitasking and many more!
        </p>
      </div>
      <div style={{ height: "20px" }}></div>
      <div className="service-provider-profile-modal-about-me">
        <h5>Skills & Experience</h5>
        <p>
          I grew up with a mom who had OCD so we cleaned until there wasn’t a
          speck of dust left! I am efficient in my cleanings and also know the
          importance of getting every crevice (especially with COVID). AirBnB
          experience. I have all the cleaning supplies.
        </p>
      </div>
      <div style={{ height: "20px" }}></div>
      <div className="service-provider-profile-modal-about-me">
        <h5>Work Photos</h5>
        <PhotosTiles />
      </div>
      <div style={{ height: "20px" }}></div>
      <h5>Reviews (5 reviews)</h5>
      <div style={{ height: "10px" }}></div>
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
            "Nya was on time, had a great personality, and did a wonderful job
            getting my showers,glass and floors clean. Would use again for sure.
            "
          </div>
        </div>
      </div>
      <div style={{ height: "15px" }}></div>
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
          <div style={{ height: "5px" }}></div>
          <div>
            <span>
              <FaStar name="star" size="15" />
            </span>{" "}
            4.9 (116 reviews)
          </div>
          <div style={{ height: "5px" }}></div>
          <div className="service-providers-display-card-review-review-review">
            "Nya was on time, had a great personality, and did a wonderful job
            getting my showers,glass and floors clean. Would use again for sure.
            "
          </div>
        </div>
      </div>
      <div style={{ height: "15px" }}></div>
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
            "Nya was on time, had a great personality, and did a wonderful job
            getting my showers,glass and floors clean. Would use again for sure.
            "
          </div>
        </div>
      </div>
      <div style={{ height: "15px" }}></div>
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
            "Nya was on time, had a great personality, and did a wonderful job
            getting my showers,glass and floors clean. Would use again for sure.
            "
          </div>
        </div>
      </div>
      <div style={{ height: "15px" }}></div>
    </div>
  );
};

export default ServiceProviderProfileModal;
