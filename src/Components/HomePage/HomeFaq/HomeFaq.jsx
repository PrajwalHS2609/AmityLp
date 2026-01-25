"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import "./HomeFaq.css";
const HomeFaq = () => {
  const faq = [
    {
      question: "1. What is Amity Online MBA?",
      answer:
        "Amity Online MBA is a UGC-approved and world-accredited two-year postgraduate course provided by Amity University Online. It is specially designed for working professionals and graduates looking to enhance their careers in management without quitting their jobs.",
    },
    {
      question: "2. Is Amity Online MBA UGC-approved?",
      answer:
        "Yes, Amity Online MBA is UGC-entitled and AICTE-approved. Amity University Online is also accredited by NAAC with an A+ grade and accepted by international agencies like WES (Canada & USA).",
    },
    {
      question: "3. How much time does the Amity Online MBA program take?",
      answer:
        "The duration of the program is 2 years (4 semesters). Students also enjoy flexible learning features, self-learning materials, and online examinations.",
    },
    {
      question:
        "4. What are the eligibility requirements for Amity Online MBA?",
      answer:
        "Candidates should have a bachelor's degree (from any stream) from a recognized institution. Final-year students with pending results and the workimg professionals are also eligible.",
    },
    {
      question: "5. Does Amity Online MBA offer placement assistance?",
      answer:
        "Yes, Amity Online provides career guidance such as virtual job fairs, resume writing assistance, interview practice, and access to worldwide job openings through industry partnerships.",
    },
  ];
  return (
    <div className="homeFaq-container">
      <div className="homeFaq-heading">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="homeFaq-wrapper">
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

              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default HomeFaq;
