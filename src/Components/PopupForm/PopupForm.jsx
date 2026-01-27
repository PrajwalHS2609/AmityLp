"use client";
import React from "react";
import "./PopupForm.css";
import { HiMiniXMark } from "react-icons/hi2";
import Swal from "sweetalert2";
import Image from "next/image";
import homePopUp from "@/Images/home_popup.png";
const PopupForm = () => {
  const handleExit = () => {
    document.querySelector(".popup-container").style.display = "none";
  };
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
    <div className="popup-container">
      <div className="popup-wrapper">
        {/* Left Side - Image */}
        <div className="popup-content">
          <Image src={homePopUp} alt="popup" />
        </div>

        {/* Right Side - Form */}
        <div className="popup-content form-side">
          <div className="popup-exit">
            <HiMiniXMark className="popup-exitIcon" onClick={handleExit} />
          </div>
          <h2>Get in Touch</h2>
          <form className="popup-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Full Name" name="name" required />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />

            <select name="course" id="" required>
              <option value="">Select Course</option>
              <option value="Finance and Accounting Management">
                Finance and Accounting Management
              </option>
              <option value="Global Finance Market">
                Global Finance Market
              </option>
              <option value="Insurance Management">Insurance Management</option>
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

            {/* <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
            ></textarea> */}

            <button type="submit">Submit</button>
          </form>
          <label className="heroForm-consent">
            <input type="checkbox" checked readOnly />
            <span>
              I authorize Amity University Online and its associates to contact
              me with updates and notifications via email, SMS, WhatsApp, and
              voice calls. This consent will override any registration under
              DNC/NDNC.
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
