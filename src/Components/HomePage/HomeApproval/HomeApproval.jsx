"use client";
import React from "react";
import "./HomeApproval.css";
import Image from "next/image";
import anaac from "@/Images/Approval/anaac.png";
import icas from "@/Images/Approval/icas.png";
import aicte from "@/Images/Approval/aicte.png";
import acu from "@/Images/Approval/acu.png";
import ices from "@/Images/Approval/ices.png";
import iqas from "@/Images/Approval/iqas.png";
import ugc from "@/Images/Approval/ugc.png";
import wes from "@/Images/Approval/wes.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeApproval = () => {
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
      img: anaac,
      text: "National Assessment and Accreditation Council (NAAC) A+",
    },
    {
      img: icas,
      text: "International Credential Assessment Service of Canada",
    },
    { img: aicte, text: "All India Council for Technical Education (AICTE)" },
    { img: acu, text: "The Association of Commonwealth Universities (ACU)" },
    { img: ices, text: "International Credential Evaluation Service (ICES)" },
    {
      img: iqas,
      text: "International Qualifications Assessment Service (IQAS)",
    },
    { img: ugc, text: "University Grants Commission (UGC)" },
    { img: wes, text: "World Education Services (WES)" },
  ];

  return (
    <div className="homeApproval-container">
     <div className="homeApproval-heading">
       <h2>Approvals and Accreditations</h2>
      <p>Learn from the industry-recognized university</p>
     </div>
      <div className="homeApproval-content">
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
            <div key={index} className="homeApproval-item">
              <div className="homeApproval-wrapper" >
                <div className="homeApproval-icon">
                  <Image
                    src={item.img}
                    alt={item.text}
                    width={100}
                    height={100}
                  />
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeApproval;
