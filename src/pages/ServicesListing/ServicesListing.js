import React from "react";
import './ServicesListing.css'
import SearchBarWithDropdown from "../../components/SearchBarDropdown/SearchBarDropdown";
import ServiceCardGrid from "../../components/ServicesCard/ServicesCard";

import homeService from "../../images/Services/service-maintenance-worker-repairing.jpg"

const ServicesListingPage = () => {
  const cards = [
    { imageSrc: `${homeService}`, description: '8 service providers', title: 'Home Services', price: 'start $1203' },
    { imageSrc: `${homeService}`, description: '12 service providers', title: 'Personal Care Services', price: 'start $342' },
    { imageSrc: `${homeService}`, description: '4 service providers', title: 'Pet Services', price: 'start $23' },
    { imageSrc: `${homeService}`, description: '2 service providers', title: 'Automotive Services', price: 'start $342' },
    { imageSrc: `${homeService}`, description: '6 service providers', title: 'Event Services', price: 'start $234' },
    { imageSrc: `${homeService}`, description: '5 service providers', title: 'Tutoring and Education Services', price: 'start $546' },
    { imageSrc: `${homeService}`, description: '16 service providers', title: 'Professional Services', price: 'start $16' },
    { imageSrc: `${homeService}`, description: '2 service providers', title: 'Health and Fitness Services', price: 'start $64' },
    { imageSrc: `${homeService}`, description: '7 service providers', title: 'Lawn and Garden Services', price: 'start $121' },
  ];
  
  return (
    <div className="services-listing-div">
      <div style={{ height: "30px" }}></div>
      <div className="homepage-container-2-text2">
        Find the <span className="magenta">top-rated</span> services in your area.
      </div>
      <SearchBarWithDropdown />
      <div className="services-listing-div-cards">
      <ServiceCardGrid cards={cards} />
      </div>
    </div>
  );
};

export default ServicesListingPage;
