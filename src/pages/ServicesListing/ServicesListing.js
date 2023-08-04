import React, { useEffect, useState } from "react";

import "./ServicesListing.css";
import SearchBarWithDropdown from "../../components/SearchBarDropdown/SearchBarDropdown";
import ServiceCardGrid from "../../components/ServicesCard/ServicesCard";
import ErrorModal from "../../components/UIElements/ErrorModal/ErrorModal";
import LoadingSpinner from "../../components/UIElements/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../hooks/http-hooks";

import homeService from "../../images/Services/service-maintenance-worker-repairing.jpg";

const ServicesListingPage = () => {
  // const cards = [
  //   { imageSrc: `${homeService}`, description: '8 service providers', title: 'Home Services', price: 'start $1203' },
  //   { imageSrc: `${homeService}`, description: '12 service providers', title: 'Personal Care Services', price: 'start $342' },
  //   { imageSrc: `${homeService}`, description: '4 service providers', title: 'Pet Services', price: 'start $23' },
  //   { imageSrc: `${homeService}`, description: '2 service providers', title: 'Automotive Services', price: 'start $342' },
  //   // { imageSrc: `${homeService}`, description: '6 service providers', title: 'Event Services', price: 'start $234' },
  //   // { imageSrc: `${homeService}`, description: '5 service providers', title: 'Tutoring and Education Services', price: 'start $546' },
  //   // { imageSrc: `${homeService}`, description: '16 service providers', title: 'Professional Services', price: 'start $16' },
  //   // { imageSrc: `${homeService}`, description: '2 service providers', title: 'Health and Fitness Services', price: 'start $64' },
  //   // { imageSrc: `${homeService}`, description: '7 service providers', title: 'Lawn and Garden Services', price: 'start $121' },
  // ];

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedServices, setLoadedServices] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/category/getAllCategories"
        );

        setLoadedServices(responseData.categories);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <div className="services-listing-div">
        <ErrorModal error={error} onClear={clearError} />
        <div style={{ height: "30px" }}></div>
        <div className="homepage-container-2-text2">
          Find the <span className="magenta">top-rated</span> services in your
          area.
        </div>
        <SearchBarWithDropdown />
        <div className="services-listing-div-cards">
          {isLoading && (
            <div className="center">
              <LoadingSpinner />
            </div>
          )}
          {!isLoading && loadedServices && (
            <ServiceCardGrid cards={loadedServices} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesListingPage;
