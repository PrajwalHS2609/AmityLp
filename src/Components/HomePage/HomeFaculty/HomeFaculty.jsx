"use client";
import React from "react";
import "./HomeFaculty.css";
import Carousel from "react-multi-carousel";
const HomeFaculty = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // ⬅️ reduced from 10 (10 breaks layout)
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const items = [
    {
      img: "https://www.collegesathi.com/amityonlinemba/Rashmi_8b49fa929f_0da32a8dc8.webp",
      title: "Dr. Rashmi Saxena",
      text: "Assistant Professor | 14+ years of experience; PhD in Management",
    },
    {
      img: "https://www.collegesathi.com/amityonlinemba/Mona_a759d1ef3c_1ab8bcc0c1.webp",
      title: "Mona Chaudhary",
      text: "Assistant Professor | 9+ years of experience; MBA",
    },
    {
      img: "https://www.collegesathi.com/amityonlinemba/Neha_863217fa3c_4b0b362ef8.webp",
      title: "Neha Tandon",
      text: "Assistant Professor",
    },
    {
      img: "https://www.collegesathi.com/amityonlinemba/Coral_Barboza_431bdc3292.webp",
      title: "Dr. Coral Jasmine",
      text: "Associate Professor | 10+ years of experience; PhD in General",
    },
    {
      img: "https://www.collegesathi.com/amityonlinemba/Pragati_baf7c9d3f8_7377e19cde.webp",
      title: "Dr. Pragati Sahai",
      text: "Assistant Professor | 17+ years of experience; PhD in Biotechnology",
    },
    {
      img: "https://www.collegesathi.com/amityonlinemba/Maitri_222f683f53_a1f236c8b1.webp",
      title: "Dr. Maitri Savarn",
      text: "MA in Psychology, MBA, PhD in Human Resource Management",
    },
    {
      img: "https://www.collegesathi.com/amityonlinemba/Reema_d2c70932d9.webp",
      title: "Dr. Reema Sharma ",
      text: "Associate Professor | 15+ years of experience; PhD in Management ",
    },
  ];
  return (
    <div className="homeFaculty-container">
      <div className="homeFaculty-heading">
        <h2>Learn with Amity’s Top Ranked Faculty</h2>
        <p>
          Learn from the best at Amity Online with global and international
          faculty
        </p>
      </div>
      <div className="homeFaculty-wrapper">
        <Carousel
          responsive={responsive}
          swipeable
          draggable
          showDots={true}
          ssr
          infinite
          autoPlay
          autoPlaySpeed={2000}
          keyBoardControl
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          // itemClass="serviceHeaderCarousel-item"
        >
          {items.map((item, index) => (
            <div key={index} className="homeFaculty-item">
              <div className="homeFaculty-itemWrapper">
                <div className="homeFaculty-img">
                  <img
                    src={item.img}
                    alt={item.text}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="homeFaculty-itemContent">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeFaculty;
