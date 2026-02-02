"use client";
import React from "react";
import "./HomeFaculty.css";
import Carousel from "react-multi-carousel";
import Maitri from "@/Images/faculty/Maitri.png";
import Coral from "@/Images/faculty/Coral_Barboza.png";
import Mona from "@/Images/faculty/Mona.png";
import Neha from "@/Images/faculty/Neha.png";
import Pragati from "@/Images/faculty/Pragati.png";
import Rashmi from "@/Images/faculty/Rashmi.png";
import Reema from "@/Images/faculty/Reema.png";
import Image from "next/image";

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
      img: Rashmi,
      title: "Dr. Rashmi Saxena",
      text: "Assistant Professor | 14+ years of experience; PhD in Management",
    },
    {
      img: Mona,
      title: "Mona Chaudhary",
      text: "Assistant Professor | 9+ years of experience; MBA",
    },
    {
      img: Neha,
      title: "Neha Tandon",
      text: "Assistant Professor",
    },
    {
      img: Coral,
      title: "Dr. Coral Jasmine",
      text: "Associate Professor | 10+ years of experience; PhD in General",
    },
    {
      img: Pragati,
      title: "Dr. Pragati Sahai",
      text: "Assistant Professor | 17+ years of experience; PhD in Biotechnology",
    },
    {
      img: Maitri,
      title: "Dr. Maitri Savarn",
      text: "MA in Psychology, MBA, PhD in Human Resource Management",
    },
    {
      img: Reema,
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
                  <Image
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
