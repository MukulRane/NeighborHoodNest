import React from "react";
import "./ServiceProviderCheckbox.css";

const ServiceProviderCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="service-provider-checkbox">
      <input
        className="service-provider-checkbox-input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="service-provider-checkbox-text">{label}</span>
    </label>
  );
};

export default ServiceProviderCheckbox;
