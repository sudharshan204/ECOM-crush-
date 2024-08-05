import React from "react";
import "../NewArrival/Newarrival.css";
import img1 from "../../assets/Images/home2.png";
import dress2 from "../../assets/Images/home2.png";
import dress1 from "../../assets/Images/home2.png";
import dress3 from "../../assets/Images/home2.png";
import dress4 from "../../assets/Images/home2.png";
import dress5 from "../../assets/Images/home2.png";
import dress6 from "../../assets/Images/home2.png";
import dress7 from "../../assets/Images/home2.png";

const Layout = () => {
  const elements = [
    {
      img: dress2,
      title: "BLUE JACKET",
    },
    {
      img: img1,
      title: "KURUTHA",
    },
    {
      img: dress1,
      title: "GREEN SHIRT",
    },
    {
      img: dress3,
      title: "BLUE SUIT",
    },
    {
      img: dress4,
      title: "WHITE SHIRT",
    },
    {
      img: dress5,
      title: "JEANS",
    },
    {
      img: dress6,
      title: "BLUE PANT",
    },
    {
      img: dress7,
      title: "SUIT",
    },
    {
      img: dress5,
      title: "JEANS",
    },
  ];

  return (
    <div>

        <div className="new-arrivals-body">
          <div className="new-arrivals-box-section">
            <div className="new-arrivals-box">
              {elements.map((element, index) => (
                <div key={index} className="box" style={{ width: "24rem", height: "23rem" }}>
                  <img src={element.img} alt={element.title} className="box-img" />
                  <div className="box-content">
                    <h3>{element.title}</h3>
                    <p>{element.para}</p>
                    <button>SHOP NOW</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Layout;
