import React, { useState } from "react";
import classNames from "classnames";
import "./CollectionSwitcher.css";

const CollectionSwitcher = ({ collections, onSwitch }) => {
  const [selectedCollection, setSelectedCollection] = useState(collections[0]);

  const handleSwitch = (collection) => {
    setSelectedCollection(collection);
    onSwitch(collection);
  };

  return (
    <div className="collection-switcher">
      {collections.map((collection, index) => (
        <div
          key={index}
          className={classNames("switcher-item", {
            selected: selectedCollection === collection, 
            hover: selectedCollection !== collection,  
          })}
          onClick={() => handleSwitch(collection)}
        >
          {collection}
        </div>
      ))}
    </div>
  );
};

export default CollectionSwitcher;
