import React from "react";
import "./Footer.css";
const Footer = () => {
  const keywords=[
{item:"amity university mba fees"},
{item:"amity online mba"},
{item:"amity university for mba"},
{item:"amity online mba fees"},
{item:"amity university jaipur mba fees"},
{item:"amity university learning"},
{item:"amity mba fees"},
{item:"amity learning courses"},
{item:"amity mba online"},
{item:"amity online mba fees"},
{item:"mba amity online"},
{item:"amity"},
{item:"amity mba learning"},
{item:"mba from amity university"},
{item:"amity learning mba fees"},
{item:"amity mba learning"},
{item:"amity university open mba fees"},
{item:"amity online mba specialization"},
{item:"amity university online mba certificate"},
{item:"amity university online mba placement average package"},
{item:"amity university online mba fees"},
{item:"amity university mba online"},
{item:"amity university mba learning"},
{item:"amity apply online"},
{item:"amity open learning"},
{item:"amity mba"},
{item:"amity university education mba fees"},
{item:"amity university for mba learning"},
{item:"amity mba online courses"},
{item:"amity learning mba"},
  {item:"amity online courses"},
{item:"amity education mba"},
  {item:"amity online mba exam pattern"},
{item:"amity online mba brochure"},
{item:"  amity online mba admission"},
{item:"amity university mba highest package"},
{item:"amity online mba eligibility"},
{item:"amity university online mba specialization"},
{item:"amity learning mba fees structure"},
{item:"amity university mba fees"},
{item:"mba fees in amity university"},
{item:"amity university mba fees"},
{item:"amity university online courses fees"},
{item:"online mba from amity university"},
{item:"amity open mba"},
{item:"amity university learning mba fees"},
{item:"learning mba from amity university"},
{item:"amity mba"},
{item:"amity online mba courses"},
{item:"amity university online mba syllabus pdf"},
{item:"amity online mba degree certificate"},
{item:"amity online mba last date to apply"},
{item:"amity online mba price"},
{item:"amity online mba 2026"},
{item:"amity university online mba for working professionals"},
{item:"amity university for mba fee structure"},
{item:"amity mba fees"},
{item:"amity university education mba"},
{item:"amity university online degree"},
{item:"amity mba"},
{item:"mba amity fees"},
{item:"mba amity university"},
{item:"amity online mba"},
{item:"amity mba fees"},
{item:"amity university online mba program"},
{item:"mba online amity university"},
{item:"online amity university"},
{item:"amity university online courses"},
{item:"amity university mba online fees"},
{item:"fees for online mba in amity university"},
{item:"amity university mba program"},
{item:"amity online degree"},
{item:"mba from amity university learning"},
{item:"mba from amity university"},
{item:"amity university education fee structure"},
{item:"amity university education courses list"},
{item:"amity online mba"},
{item:"amity mba fees"},
{item:"amity correspondence mba"},
{item:"amity learning mba fees"},
{item:"amity online mba course"},
{item:"amity university learning mba courses"},
{item:"online mba courses amity university"},
{item:"amity online programs"},
{item:"amity learning"},
{item:"amity online mba degree"},
{item:"online mba amity fees"},
{item:"mba from amity university"},
{item:"amity university online mba fees"},
{item:"amity education"},
{item:"amity university online mba courses"},
{item:"amity university mba learning"},
{item:"amity university mba correspondence fees"},
{item:"amity university mba learning fees"},
{item:"learning mba in amity university"},
{item:"mba amity university online"},
{item:"correspondence mba from amity university"},
{item:"amity online mba fees"},
{item:"amity open mba fees"},
{item:"mba admission in amity university"},
{item:"Amity Online University"},
{item:"Amity Online University Noida"},
{item:"Noida Amity Online University"},
{item:"Amity University Online MBA Fees"},
{item:"Amity University Online MBA"},
{item:"Noida Amity"},
{item:"Amity Online MBA"},
{item:"Amity University MBA Distance Education"},
{item:"Amity University MBA"},
{item:"Amity Noida Online MBA Fees"},
{item:"Amity Online MBA Admission"},
{item:"Amity Online"},
{item:"Online MBA Amity Fees"},
{item:"Amity Online MBA Fees"},
{item:"Amity University Gurgaon Online MBA Fees"},
{item:"Amity Online MBA Course Fees"},
{item:"Amity University Online"},
{item:"Amity Distance MBA"},
{item:"Amity University Online MBA 2026"},
{item:"Amity University Online Course Fees"},
{item:"Online MBA From Amity"},
{item:"Online MBA Amity University"},
{item:"Amity Online University Delhi"},
{item:"Amity Online University Fees"},
{item:"Amity University"},
{item:"Amity University Noida"},
{item:"Noida Amity University"},
{item:"Amity University MBA Fees"},
{item:"Amity Noida MBA Fees"},
{item:"Amity Admission"},
{item:"MBA Amity Fees"},
{item:"Amity MBA Fees"},
{item:"Amity University Gurgaon MBA Fees"},
{item:"Amity University Courses"},
{item:"Amity University Noida MBA Fees"},
{item:"Amity University Course Fees"},
{item:"MBA From Amity"},
{item:"MBA Amity University"},
{item:"Amity University Delhi"},
{item:"Amity University Fees"},
{item:"Amity University Gurugram"},
{item:"MBA Amity University Noida"},
{item:"Amity University Gurgaon MBA"},
{item:"Online MBA"},
  ]
  return (
    <div className="footer-container">
      <h4>Top Query</h4>
      <div className="footer-wrapper">
        <div className="keywords-container">
          <ul className="keywords-list">
            {keywords.map((x, index) => (
              <li key={index} className="keywords-item">
                {x.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottomContent">
        <div className="footer-bottomTextBlock">
          <p>
            Disclaimer: We are authorized marketing agency for Amity University
            Online. We act as a marketing service partner only. Amity University
            holds full rights to request changes or removal of any non-relevant
            content. Images used are for illustrative purposes and do not
            directly represent the respective colleges or universities.
          </p>
        </div>{" "}
        <div className="footer-bottomTextBlock">
          Copyright © 2025 | prizmaacademy.in
        </div>
      </div>
    </div>
  );
};

export default Footer;
