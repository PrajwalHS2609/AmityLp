import React from "react";
import "./HomeFee.css";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
const HomeFee = () => {
  return (
    <div className="homeFees-container">
      <div className="homeFees-wrapper">
        <div className="homeFees-heading">
          <h2>Fee Structure</h2>
        </div>
        <div className="homeFees-content">
          <div className="homeFees-card">
            <FaHandHoldingUsd className="homeFees-icon" />
            <div className="homeFees-cover">
              <p>24 Months No Cost EMI</p>
              <span>
                <h4>₹7877/-</h4>
                <p>per month onwards</p>
              </span>
            </div>
          </div>
          <div className="homeFees-card1">
            <FaGraduationCap className="homeFees-icon1" />
            <div className="homeFees-cover1">
              <p>Full Course Fee</p>
              <span>
                <h4>₹49,750</h4>
              </span>
            </div>
          </div>
          <div className="homeFees-card1">
            <RiMoneyRupeeCircleLine className="homeFees-icon1" />
            <div className="homeFees-cover1">
              <p>Full Course Fee</p>
              <span>
                <h4>₹1,99,000/-</h4>
              </span>
            </div>
          </div>
          <div className="homeFees-card1">
            <div className="homeFees-cover1">
              <p>Attractive Scholarships Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFee;
