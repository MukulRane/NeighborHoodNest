import React, { useState } from 'react';
import './PriceRangeSlider.css';

const PriceRangeSlider = () => {
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(80);

  const handleMinChange = (event) => {
    setMinValue(parseInt(event.target.value));
  };

  const handleMaxChange = (event) => {
    setMaxValue(parseInt(event.target.value));
  };

  return (
    <div className="double-range-slider">
      <input
        type="range"
        min="0"
        max="100"
        value={minValue}
        onChange={handleMinChange}
        className="slider-range slider-min"
      />
      <input
        type="range"
        min="0"
        max="100"
        value={maxValue}
        onChange={handleMaxChange}
        className="slider-range slider-max"
      />
    </div>
  );
};

export default PriceRangeSlider;
