

import React, { useState } from "react";
import CaseSelector from './components/CaseSelector';
import SizeSelector from "./components/SizeSelector";
import BandSelector from "./components/BandSelector";
import CollectionSwitcher from "./components/CollectionSwitcher";
import "./App.css"

const collections = ["SE", "Series 10", "Hermès", "Ultra"];

const sizes = [
  { label: "42mm", price: 399, image: "https://media.istockphoto.com/id/484661678/photo/smart-watch-on-a-blue-background.jpg?s=1024x1024&w=is&k=20&c=AzCzXqhwVMwtXzBt9kT6xENWKcUCCwiqEYG_aE9LA2c=" }, 
  { label: "46mm", price: 449, image: "https://media.istockphoto.com/id/484661678/photo/smart-watch-on-a-blue-background.jpg?s=1024x1024&w=is&k=20&c=AzCzXqhwVMwtXzBt9kT6xENWKcUCCwiqEYG_aE9LA2c=" }
];

const cases = [
  { name: "Aluminum", image: "https://media.istockphoto.com/id/484661678/photo/smart-watch-on-a-blue-background.jpg?s=1024x1024&w=is&k=20&c=AzCzXqhwVMwtXzBt9kT6xENWKcUCCwiqEYG_aE9LA2c=" },
  { name: "Titanium", image: "https://images.unsplash.com/photo-1526045431048-f857369baa09?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  },
  { name: "Aluminum", image:"https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Titanium", image: "https://images.unsplash.com/photo-1451859757691-f318d641ab4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGlwaG9uZSUyMHdhdGNoJTIwc3RlZWx8ZW58MHx8MHx8fDA%3D" },
  { name: "Titanium", image: "https://media.istockphoto.com/id/172787384/photo/watch.webp?a=1&b=1&s=612x612&w=0&k=20&c=P1OslAdlrF7elgT3hGIBbrdmkfupQky07eg5NLI3qsM=" },
  { name: "Aluminum", image:"https://images.unsplash.com/photo-1542541864-4abf21a55761?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdyaXN0d2F0Y2h8ZW58MHx8MHx8fDA%3D"}
];

const App = () => {
  const [selectedCase, setSelectedCase] = useState(cases[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedBand, setSelectedBand] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState("Series 10");

  const handleCollectionSwitch = (collection) => {
    setSelectedCollection(collection);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleCaseSelect = (caseItem) => {
    setSelectedCase(caseItem);
  };

  
  return (
    <div className="homepage-container">
      <h1>Customize Your Apple Watch</h1>
      <CollectionSwitcher collections={collections} onSwitch={handleCollectionSwitch} />
      <CaseSelector
        cases={cases}
        onCaseSelect={handleCaseSelect}
        selectedCase={selectedCase}
      />
     <SizeSelector
  sizes={sizes}
  onSizeSelect={handleSizeSelect}
  selectedSize={selectedSize}
  selectedCase={selectedCase} />

      <BandSelector />
    </div>
  );
};

export default App;







