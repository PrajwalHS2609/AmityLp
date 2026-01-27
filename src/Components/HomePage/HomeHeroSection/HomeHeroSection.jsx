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
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
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
            <b>INDIA&apos;S MOST RECOGNISED UGC-ENTITLED</b>
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
            <div className="homeHero-button">
              <button onClick={handlePop}>Download Brochure</button>

              <a href="tel:8302129336">
                <button>Contact Us</button>
              </a>
            </div>
          </div>
          <div className="homeHero-coverContent">
            <div className="homeHero-coverContentForm">
              <h2>Connect With Our Experts</h2>

              <form className="heroForm" onSubmit={onSubmit}>
                <input name="Name" type="text" placeholder="Enter Name" />
                <input name="Email" type="email" placeholder="Enter Email" />
                <input name="Phone No" type="tel" placeholder="Enter Mobile Number*" />
                <select name="course" id="" required>
                  <option value="">Select Course</option>
                  <option value="Finance and Accounting Management">
                    Finance and Accounting Management
                  </option>
                  <option value="Global Finance Market">
                    Global Finance Market
                  </option>
                  <option value="Insurance Management">
                    Insurance Management
                  </option>
                  <option value="Information Technology Management">
                    Information Technology Management
                  </option>
                  <option value="Digital Marketing Management">
                    Digital Marketing Management
                  </option>
                  <option value="Data Science">Data Science</option>
                  <option value="Digital Entrepreneurship">
                    Digital Entrepreneurship
                  </option>
                  <option value="International Business Management">
                    International Business Management
                  </option>
                  <option value="Business Analytics">Business Analytics</option>
                  <option value="Retail Management">Retail Management</option>
                  <option value="Human Resource Management">
                    Human Resource Management
                  </option>
                  <option value="Human Resources Analytics Hospitality Management">
                    Human Resources Analytics Hospitality Management
                  </option>
                  <option value="Production & Operations Management">
                    Production & Operations Management
                  </option>
                  <option value="Petroleum & Natural Gas Management">
                    Petroleum & Natural Gas Management
                  </option>
                  <option value="Entrepreneurship & Leadership Management">
                    Entrepreneurship & Leadership Management
                  </option>
                  <option value="Marketing & Sales Management">
                    Marketing & Sales Management
                  </option>
                </select>
                {/* <textarea name="Message" id="" placeholder="Message" /> */}
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
              <b>INDIA&apos;S MOST RECOGNISED UGC-ENTITLED</b>
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
              <div className="homeHero-button">
                <button onClick={handlePop}>Download Brochure</button>

                <a href="tel:8302129336">
                  <button>Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="homeHero-repCoverContent">
          <div className="homeHero-coverContentForm">
            <h2>Connect With Our Experts</h2>

            <form className="heroForm" onSubmit={onSubmit}>
              <input name="Name" type="text" placeholder="Enter Name" />
              <input name="Email" type="email" placeholder="Enter Email" />
              <input name="Phone No" type="tel" placeholder="Enter Mobile Number*" />
              <select  name="course" id="" required>
                <option value="">Select Course</option>
                <option value="Finance and Accounting Management">
                  Finance and Accounting Management
                </option>
                <option value="Global Finance Market">
                  Global Finance Market
                </option>
                <option value="Insurance Management">
                  Insurance Management
                </option>
                <option value="Information Technology Management">
                  Information Technology Management
                </option>
                <option value="Digital Marketing Management">
                  Digital Marketing Management
                </option>
                <option value="Data Science">Data Science</option>
                <option value="Digital Entrepreneurship">
                  Digital Entrepreneurship
                </option>
                <option value="International Business Management">
                  International Business Management
                </option>
                <option value="Business Analytics">Business Analytics</option>
                <option value="Retail Management">Retail Management</option>
                <option value="Human Resource Management">
                  Human Resource Management
                </option>
                <option value="Human Resources Analytics Hospitality Management">
                  Human Resources Analytics Hospitality Management
                </option>
                <option value="Production & Operations Management">
                  Production & Operations Management
                </option>
                <option value="Petroleum & Natural Gas Management">
                  Petroleum & Natural Gas Management
                </option>
                <option value="Entrepreneurship & Leadership Management">
                  Entrepreneurship & Leadership Management
                </option>
                <option value="Marketing & Sales Management">
                  Marketing & Sales Management
                </option>
              </select>
              {/* <textarea name="Message" id="" placeholder="Message" /> */}

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
