"use client";
import React from "react";
import "./HomeDifferent.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
const HomeDifferent = () => {
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
      img: "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2Fpersonalised_981432fdf9.webp&w=1080&q=75",
      title: "UDL-Based Learning",
      text: "Personalized content that drives deeper learning and better performance.",
    },
    {
      img: "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2Fami_9e5d074af7.webp&w=1080&q=75",
      title: "Prof. AMI, Reimagined",
      text: "24x7 AI mentor for instant guidance and learning support.",
    },
    {
      img: "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2Findustry_learning_14225e5bf2.webp&w=1080&q=75",
      title: "Live Industry Projects",
      text: "Build your resume with mentor-led, real business project experience.",
    },
    {
      img: "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2Fai_certification_2acc9304df.webp&w=1080&q=75",
      title: "Certification in Basics of AI",
      text: "Earn an in-demand AI certification for today's digital age.",
    },
    {
      img: "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2Fgamified_2495bb1569.webp&w=1080&q=75",
      title: "Gamified Assignments",
      text: "Master strategy and leadership through real-world business roleplays.",
    },
    {
      img: "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2Fai_enabled_d47bb12cfe.webp&w=1080&q=75",
      title: "AI Learning Tools",
      text: "Smart unified platform with AI-generated summaries, quizzes & notes.",
    },
  ];
  return (
    <div className="homeDifferent-container">
      <div className="homeDifferent-content">
        <h2>What Makes This MBA Different</h2>
        <p>
          Amity Online MBA offers an innovative, smart and cutting-edge learning
          experience which blends content design with practical exposure in
          different industries. This program provides a modern approach with the
          interactive use of tools, AI-powered technology and career-focused
          content structure which not only builds your skillset but trains you
          to perform best in the real business environment and situations.
        </p>
        <button>Known More</button>
      </div>
      <div className="homeDifferent-wrapper">
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
            <div key={index} className="homeDifferent-item">
              <div className="homeDifferent-itemWrapper">
                <div className="homeDifferent-img">
                  <img
                    src={item.img}
                    alt={item.text}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="homeDifferent-itemContent">
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

export default HomeDifferent;
