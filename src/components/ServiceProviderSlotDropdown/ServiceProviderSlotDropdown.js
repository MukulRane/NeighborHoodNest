import React from 'react';
import './ServiceProviderSlotDropdown.css';

const ServiceProviderSlotDropdown = ({ options, defaultValue, onChange }) => {
  return (
    <select className="service-provider-slot-dropdown" onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default ServiceProviderSlotDropdown;
