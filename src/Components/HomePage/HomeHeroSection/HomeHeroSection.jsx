import React from "react";
import "./HomeHeroSection.css";
import Image from "next/image";
import banner from "@/Images/homeBanner.png";
import { SlCalender } from "react-icons/sl";
const HomeHeroSection = () => {
  return (
    <div className="homeHero-container">
      <div className="homeHero-wrapper">
        <Image src={banner} alt="banner" width={1400} height={800} />
        <div className="homeHero-cover">
          <div className="homeHero-coverContent">
            <div className="homeHero-coverImgBg">
              <img
                src="https://amityonline.com/_s/Frame_1000004421_1_3a86427cce.webp"
                alt=""
              />
              <div></div>
            </div>
          </div>
          <div className="homeHero-coverContent">
            <b>PG Program</b>
            <h2>
              Empower Your Career with AI-powered Online MBA for Next Gen
              Leaders
            </h2>
            <div className="homeHero-section">
              Next-Gen MBA for an AI-Ready Career
            </div>
            <div className="homeHero-duration">
              <SlCalender className="homeHero-durationIcon" />
              Duration: 2 years
            </div>
            <div></div>
          </div>
          <div className="homeHero-coverContent">
            <div className="homeHero-coverContentForm">
              <h2>Connect With Our Experts</h2>

              <form className="heroForm">
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter Email" />
                <input type="tel" placeholder="Enter Mobile Number*" />
                {/* <textarea type="text" placeholder="Enter OTP" /> */}
                <textarea name="" id="" placeholder="Message" />
                <label className="heroForm-consent">
                  <input type="checkbox" checked readOnly />
                  <span>
                    I authorize Amity University Online and its associates to
                    contact me with updates and notifications via email, SMS,
                    WhatsApp, and voice calls. This consent will override any
                    registration under DNC/NDNC.
                  </span>
                </label>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="homeHero-respWrapper">
        <div className="homeHero-respSection">
          <Image src={banner} alt="banner" width={1400} height={800} />
          <div className="homeHero-respCover">
            <div className="homeHero-respCoverContent1">
              <b>PG Program</b>
              <h2>
                Empower Your Career with AI-powered Online MBA for Next Gen
                Leaders
              </h2>
              <div className="homeHero-section">
                Next-Gen MBA for an AI-Ready Career
              </div>
              <div className="homeHero-duration">
                <SlCalender className="homeHero-durationIcon" />
                Duration: 2 years
              </div>
            </div>
          </div>
        </div>

        <div className="homeHero-repCoverContent">
          <div className="homeHero-coverContentForm">
            <h2>Connect With Our Experts</h2>

            <form className="heroForm">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <input type="tel" placeholder="Enter Mobile Number*" />
              <textarea name="" id="" placeholder="Message" />

              <label className="heroForm-consent">
                <input type="checkbox" checked readOnly />
                <span>
                  I authorize Amity University Online and its associates to
                  contact me with updates and notifications via email, SMS,
                  WhatsApp, and voice calls. This consent will override any
                  registration under DNC/NDNC.
                </span>
              </label>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
