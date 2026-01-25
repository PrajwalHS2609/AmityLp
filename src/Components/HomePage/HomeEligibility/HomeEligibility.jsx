import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import "./HomeEligibility.css";
import { FaRegFileAlt } from "react-icons/fa";
const HomeEligibility = () => {
  return (
    <div className="homeEligibility-container">
      <div className="homeEligibility-content">
        <div className="homeEligibility-heading">
          <h2>Eligibility Criteria</h2>
          <FaRegFileAlt className="homeEligibility-headingIcon" />
        </div>

        <ul>
          <li>
            <IoCheckmarkOutline className="homeEligibility-icon" />
            <p> Fresh graduates and working professionals.</p>
          </li>
          <li>
            <IoCheckmarkOutline className="homeEligibility-icon" />
            <p>
              Entrepreneurs looking to develop skills to manage critical
              business projects.
            </p>
          </li>
          <li>
            <IoCheckmarkOutline className="homeEligibility-icon" />
            <p>
              Aspirants or working professionals seeking a global career in the
              fields of Management, Finance, Marketing, Sales, Operations,
              Logistics among many more.
            </p>
          </li>
        </ul>
      </div>
      <div className="homeEligibility-content">
        <div className="homeEligibility-heading2">
          <h2>For Indian students</h2>
        </div>
        <ul>
          <li>
            <IoCheckmarkOutline className="homeEligibility-icon" />
            <p>
              Graduation in any discipline with 40% marks in the last qualifying
              examination. Below 40% marks, a test is conducted and if passed
              then the student is eligible for admission.
            </p>
          </li>
          <li>
            <IoCheckmarkOutline className="homeEligibility-icon" />
            <p>
              
              Applicants must possess sufficient knowledge and understanding of
              the English Language.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeEligibility;
