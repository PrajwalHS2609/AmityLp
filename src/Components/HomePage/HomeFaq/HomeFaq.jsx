
"use client";

import React from "react";
import { Accordion } from "react-bootstrap";
import "./HomeFaq.css";

const HomeFaq = ({ data }) => {
  const faqs = Array.isArray(data?.faqs) ? data.faqs : [];

  return (
    <section className="homeFaq-container">
      <div className="homeFaq-heading">
        <h2>{data?.title || "Frequently Asked Questions"}</h2>
      </div>

      <div className="homeFaq-wrapper">
        {faqs.length > 0 ? (
          <Accordion defaultActiveKey="0" className="homeFaq-acc">
            {faqs.map((item, index) => (
              <Accordion.Item
                eventKey={String(index)}
                key={item._key || index}
                className="homeFaq-item"
              >
                <Accordion.Header className="homeFaq-head">
                  {index + 1}. {item.question}
                </Accordion.Header>

                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        ) : (
          <p>No FAQs available.</p>
        )}
      </div>
    </section>
  );
};

export default HomeFaq;
