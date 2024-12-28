import React from "react";
import "./CaseSelector.css";

const CaseSelector = ({ cases, onCaseSelect, selectedCase }) => {
  if (!cases || cases.length === 0) {
    return <p>No cases available</p>; // Handle empty or null cases
  }

  return (
    <div>
      <div className="case-selector">
        {cases.map((item, index) => (
          <div
            key={index}
            className={`case-item ${
              selectedCase?.name === item.name ? "selected" : ""
            }`}
            onClick={() => onCaseSelect(item)}
          >
            <img
              src={item.image}
              alt={`Case: ${item.name}`}
              style={{ width: "300px", height: "300px" }}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default CaseSelector;
