"use client";
import React from "react";
import { HiArrowSmallDown } from "react-icons/hi2";
import "./HomeProgram.css";
import { Accordion } from "react-bootstrap";
const HomeProgram = () => {
  const faq = [
    {
      question: "Semester 1",
      list: [
        "Managerial Economics",
        "Statistics for Management",
        "Professional communication",
        "Accounting for Managers",
        "Marketing Management",
      ],
    },
    {
      question: "Semester 2",
      list: [
        "Legal Aspects of Business",
        "Business Research Methods",
        "Financial Management",
        "Human Resource Management",
        "Conflict Resolution and Management",
      ],
    },
    {
      question: "Semester 3",
      list: [
        "Strategic Management",
        "Minor Project",
        "Professional Ethics",
        "Specialization Elective 1",
        "Specialization Elective 2",
        "Specialization Elective 3",
        "Specialization Elective 4",
      ],
    },
    {
      question: "Semester 4",
      list: [
        "Major Project",
        "Management in Action Social Economic and Ethical Issues",
        "Digital Marketing",
        "Specialization Elective 1",
        "Specialization Elective 2",
      ],
    },
    // {
    //   question: "Semester 5",
    //   list: [
    //     "Business Analytics",
    //     "Data Science",
    //     "Digital Entrepreneurship",
    //     "Digital Marketing Management",
    //     "Entrepreneurship and Leadership",
    //     "Finance and Accounting Management",
    //     "Global Finance Market",
    //     "Hospitality Management",
    //     "Human Resource Management",
    //     "Human Resources Analytics",
    //     "Information Technology Management",
    //     "Insurance Management",
    //     "International Business Management",
    //     "International Finance(ACCA)",
    //     "Marketing & Sales Management",
    //     "Production and Operations Management",
    //     "Retail Management",
    //     "General Management",
    //   ],
    // },
  ];
  return (
    <div className="homeProgram-container">
      <div className="homeProgram-wrapper">
        <div className="homeProgram-heading">
          <h2>Program Overview & Structure</h2>
          <button>
            EXPLORE CURRICULUM <HiArrowSmallDown className="homeProgram-icon" />
          </button>
        </div>
        <Accordion defaultActiveKey="0" className="homeFaq-acc">
          {faq.map((item, index) => (
            <Accordion.Item
              eventKey={String(index)}
              key={index}
              className="homeFaq-item"
            >
              <Accordion.Header className="homeFaq-head">
                <h5>{item.question}</h5>
              </Accordion.Header>

              <Accordion.Body>
                {item.list && (
                  <ul className="feature-list">
                    {item.list.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
      <div className="homeProgram-img">
        <img
          src="https://www.collegesathi.com/amityonlinemba/images/MBA_fafef0a1e1.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeProgram;
