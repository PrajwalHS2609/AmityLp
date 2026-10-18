
import React from "react";
import "./../Footer/Footer.css"
import "./HomeKeyword.css"
const Keyword = ({ data }) => {
  const keywords = Array.isArray(data?.keywords)
    ? data.keywords
    : [];

  return (
    <section className="keyword-container">
      <h4>Top Query</h4>

      <div className="keyword-wrapper">
        <div className="keywords-container">
          <ul className="keywords-list">
            {keywords.map((item, index) => (
              <li key={index} className="keywords-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Keyword;
