import React from "react";
import Slider from "react-slick";
import "./BandSelector.css";

const bands = [
  { id: 1, type: "Solo Loop", color: "Red", image: "https://via.placeholder.com/200?text=Solo+Loop+Red" },
  { id: 2, type: "Braided Solo Loop", color: "Blue", image: "https://via.placeholder.com/200?text=Braided+Solo+Loop" },
  { id: 3, type: "Solo Loop", color: "Red", image: "https://via.placeholder.com/200?text=Solo+Loop+Red" },
  { id: 4, type: "Braided Solo Loop", color: "Blue", image: "https://via.placeholder.com/200?text=Braided+Solo+Loop" },
  { id: 5, type: "Solo Loop", color: "Red", image: "https://via.placeholder.com/200?text=Solo+Loop+Red" },
  { id: 6, type: "Braided Solo Loop", color: "Blue", image: "https://via.placeholder.com/200?text=Braided+Solo+Loop" },

];



const BandSelector = ({ onBandSelect }) => {
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    customPaging: (i) => (
      <button style={{ border: "none", background: "transparent", cursor: "pointer" }}>
        {i + 1}
      </button>
    ),
  };
  
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {bands.map((item, index) => (
          <div key={index} className="slider-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BandSelector;
 
