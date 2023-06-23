import React, { useState } from "react";
import "./PhotosTiles.css";

const tilesData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/taskrabbit-com/image/upload/v1662516056/hwlhqmjzy1kgamvmc3oe.jpg",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/taskrabbit-com/image/upload/v1662515876/g0omiibaxvmjgyrx30ng.jpg",
  },
];

const PhotosTiles = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleTileClick = (image) => {
    setExpandedImage(image);
  };

  const handleCloseClick = () => {
    setExpandedImage(null);
  };

  return (
    <div className="photos-tiles">
      <div className="photos-tiles-tiles-container">
        {tilesData.map((tile) => (
          <div
            key={tile.id}
            className="photos-tiles-tile"
            onClick={() => handleTileClick(tile.image)}
          >
            <img src={tile.image} alt="Tile" />
          </div>
        ))}
      </div>

      {expandedImage && (
        <div className="photos-tiles-expanded-image-overlay">
          <div className="photos-tiles-expanded-image-container">
            <img src={expandedImage} alt="Expanded" />
            <button
              className="photos-tiles-close-button"
              onClick={handleCloseClick}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotosTiles;
