import React from "react";
import "./Homepage.css";
import { NavLink } from "react-router-dom";

import phoneStockImage from "../../images/Capture-removebg.png";
import Card from "../../components/Card/Card";

const HomePage = () => {
  return (
    <div>
      <div className="container-homepage">
        <div className="homepage-container-1">
          <div className="homepage-container-1-left">
            <div className="homepage-container-1-left-main-text">
              Expert home cleaning services.
            </div>
            <div style={{ height: "30px" }}></div>
            <div className="homepage-container-1-left-sub-text">
              Get a specific room or the whole house cleaned at times that work
              best for you.
            </div>
            <div style={{ height: "40px" }}></div>
            <div className="homepage-button-text-align-1">
              <div className="homepage-button-text-align">
                <div className="book-now-button">
                  <NavLink to="/servicesListing">Book Now</NavLink>
                </div>
                <div style={{ height: "10px" }}></div>
                <div className="homepage-container-1-left-sub-sub-text">
                  Starting only $30/hour
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-container-1-right">
            <img src={phoneStockImage} alt="stock of phone" />
          </div>
        </div>
      </div>

      <div className="homepage-container-2">
        <div className="homepage-container-2-text1">
          WE ARE HERE TO HELP YOU
        </div>
        <div style={{ height: "15px" }}></div>
        <div className="homepage-container-2-text2">
          What are you <span className="magenta">looking</span> for?
        </div>
        <div style={{ height: "60px" }}></div>
        <div className="homepage-container-2-cards">
          <Card
            title="Regular Cleaning"
            subtitle="Starts at $30/hour"
            description="10% off with code NEWCLEAN"
          />
          <Card
            title="Move in/out Cleaning"
            subtitle="Starts at $40/hour"
            description="10% off with code NEWCLEAN"
          />
        </div>
      </div>

      <div className="homepage-container-3">
        <div className="homepage-container-3-left">
          <div className="homepage-container-3-47-rated">
            * <span className="magenta">4.7+</span> employees only
          </div>
          <div className="homepage-container-3-47-rated-description">
            We do strict evaluations & thorough background verification.
          </div>
          <div className="homepage-container-3-47-rated-description-points">
            <ul className="homepage-container-3-47-rated-description-points-ul">
              <li className="homepage-container-3-47-rated-description-points-li">Works with a 10-point exhaustive cleaning checklist.</li>
              <li className="homepage-container-3-47-rated-description-points-li">Background verified with criminal & SSN checks.</li>
              <li className="homepage-container-3-47-rated-description-points-li">
                Requires to complete 3 audit jobs with our cleaning quality
                experts.
              </li>
            </ul>
          </div>
        </div>
        <div className="homepage-container-3-right"></div>
      </div>
    </div>
  );
};

export default HomePage;
