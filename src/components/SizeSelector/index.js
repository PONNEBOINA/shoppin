import React from "react";
import classNames from "classnames";
import "./SizeSelector.css";

const SizeSelector = ({ sizes, onSizeSelect, selectedSize, selectedCase }) => {
  return (
    <div>
      <div className="size-selector">
        {sizes.map((size, index) => (
          <div
            key={index}
            className={classNames("size-option", {
              selected: size.label === selectedSize?.label,
            })}
            onClick={() => onSizeSelect(size)}
          >
            <span>{size.label}</span>
          </div>
        ))}
      </div>

    
      <div className="adjust">
        {selectedCase?.image ? (
          <img
            src={selectedCase.image}
            alt="Selected case"
            style={{ width: "200px", height: "200px" }}
          />
        ) : (
          <p>No case selected</p>
        )}
        <p>
          {selectedCase?.name || "No case selected"} -{" "}
          {selectedSize?.label || "No size selected"} - $
          {selectedSize?.price || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default SizeSelector;
