"use client";
import React from "react";
import "./HomeHeroSection.css";
import Image from "next/image";
import banner from "@/Images/homeBanner.png";
import { FaRegCircleDot } from "react-icons/fa6";
import heroSectionGirl from "@/Images/heroSectionGirl.png";
import Swal from "sweetalert2";
const HomeHeroSection = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // ✅ Add your Web3Forms access key
    formData.append("access_key", "8e8187ed-fc3e-4bd8-b553-0755da89ab07");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
  };
  return (
    <div className="homeHero-container">
      <div className="homeHero-wrapper">
        <Image src={banner} alt="banner" width={1400} height={800} />
        <div className="homeHero-cover">
          <div className="homeHero-coverContent">
            <div className="homeHero-coverImgBg">
              <Image src={heroSectionGirl} alt="" />
              <div></div>
            </div>
          </div>
          <div className="homeHero-coverContent">
            <b>INDIA&apos;S MOST RECOGNISED UCG-ENTITLED</b>
            <h2>Online MBA Program</h2>
            <div className="homeHero-section">For Working Professionals</div>
            <div className="homeHero-duration">
              <div className="homeHero-durationContent">
                <FaRegCircleDot className="homeHero-durationIcon" />
                100% Online Learning
              </div>
              <div className="homeHero-durationContent">
                <FaRegCircleDot className="homeHero-durationIcon" />
                Global Faculty
              </div>
              <div className="homeHero-durationContent">
                <FaRegCircleDot className="homeHero-durationIcon" />
                Industry Projects
              </div>
              <div className="homeHero-durationContent">
                <FaRegCircleDot className="homeHero-durationIcon" />
                Flexible EMI Options
              </div>
            </div>
          </div>
          <div className="homeHero-coverContent">
            <div className="homeHero-coverContentForm">
              <h2>Connect With Our Experts</h2>

              <form className="heroForm" onSubmit={onSubmit}>
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
              <b>INDIA&apos;S MOST RECOGNISED UCG-ENTITLED</b>
              <h2>Online MBA Program</h2>
              <div className="homeHero-section">For Working Professionals </div>
              <div className="homeHero-duration">
                <div className="homeHero-durationContent">
                  <FaRegCircleDot className="homeHero-durationIcon" />
                  100% Online Learning
                </div>
                <div className="homeHero-durationContent">
                  <FaRegCircleDot className="homeHero-durationIcon" />
                  Global Faculty
                </div>
                <div className="homeHero-durationContent">
                  <FaRegCircleDot className="homeHero-durationIcon" />
                  Industry Projects
                </div>
                <div className="homeHero-durationContent">
                  <FaRegCircleDot className="homeHero-durationIcon" />
                  Flexible EMI Options
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="homeHero-repCoverContent">
          <div className="homeHero-coverContentForm">
            <h2>Connect With Our Experts</h2>

            <form className="heroForm" onSubmit={onSubmit}>
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
