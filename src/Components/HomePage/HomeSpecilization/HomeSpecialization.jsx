"use client"
import React from "react";
import { BsCurrencyExchange } from "react-icons/bs";
import { DiAtom } from "react-icons/di";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { GiEarthAmerica } from "react-icons/gi";
import { ImBullhorn } from "react-icons/im";
import { IoAnalytics } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import Carousel from "react-multi-carousel";
import "./HomeSpecialization.css"

const HomeSpecialization = () => {
    const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // ⬅️ reduced from 10 (10 breaks layout)
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const items = [
    {
      icon:<ImBullhorn/>,
      text: "MBA in General Management",
    },
        {
      icon:<BsCurrencyExchange/>,
      text: "Digital Entrepreneurship",
    },
            {
      icon:<VscGraph />,
      text: "Data Science",
    },
                {
      icon:<DiAtom />,
      text: "HR Analytics",
    },            {
      icon:<FaMagnifyingGlassChart />,
      text: "MBA With Dual Specialization",
    },            {
      icon:<GiEarthAmerica />,
      text: "International Finance",
    },            {
      icon:<IoAnalytics />,
      text: "Digital Entrepreneurship",
    },
    
  ];
  return (
    <div className="homeSpecialization-container">
      <div className="homeSpecialization-heading">
        <h2>Key Specializations</h2>
      </div>
      <div className="homeSpecialization-content">
        <Carousel
          responsive={responsive}
          swipeable
          draggable
          showDots={false}
          ssr
          infinite
          autoPlay
          autoPlaySpeed={2500}
          keyBoardControl
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          // itemClass="serviceHeaderCarousel-item"
        >
          {items.map((item, index) => (
            <div key={index} className="homeSpecialization-item">
              <div className="homeSpecialization-wrapper">
                  <span className="homeSpecialization-icon">{item.icon}</span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeSpecialization;
