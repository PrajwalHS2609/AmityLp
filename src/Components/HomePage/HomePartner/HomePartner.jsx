import React from "react";
import "./HomePartner.css";
import Image from "next/image";
import google from "@/Images/partner/google.png";
import ernst from "@/Images/partner/ernst_young.png";
import apple from "@/Images/partner/apple.png";
import pwc from "@/Images/partner/pwc.png";
import qatar from "@/Images/partner/qatar_airways.png";
import reliance from "@/Images/partner/reliance_industries_limited.png";
import samsung from "@/Images/partner/samsung.png";
import mahindra from "@/Images/partner/techmahindra.png";
import accenture from "@/Images/partner/accenture.png";
import birla from "@/Images/partner/aditya_birla_group.png";
import amazon from "@/Images/partner/amazon.png";
import barclay from "@/Images/partner/barclay.png";
import cisco from "@/Images/partner/cisco.png";
import dell from "@/Images/partner/dell_technologies.png";
import gail from "@/Images/partner/gail.png";
import flipkart from "@/Images/partner/flipkart.png";
import hcl from "@/Images/partner/hcltech.png";
import unilever from "@/Images/partner/hindustan_unilever.png";
import kpmg from "@/Images/partner/kpmg.png";
import wipro from "@/Images/partner/wipro.png";
import siemens from "@/Images/partner/siemens.png";
import tcs from "@/Images/partner/tcs.png";
import infosys from "@/Images/partner/infosys.png";
import jp from "@/Images/partner/jp_morgan.png";

const HomePartner = () => {
  const image = [
    { img: google },
    { img: ernst },
    { img: apple },
    { img: pwc },
    { img: qatar },
    { img: reliance },
    { img: samsung },
    { img: mahindra },
    { img: accenture },
    { img: birla },
    { img: amazon },
    { img: barclay },
    { img: cisco },
    { img: dell },
    { img: gail },
    { img: flipkart },
    { img: hcl },
    { img: kpmg },
    { img: unilever },
    { img: wipro },
    { img: siemens },
    { img: tcs },
    { img: infosys },
    { img: jp },
  ];
  return (
    <div className="homePartner-container">
      <div className="homePartner-heading">
        <h2>
          Employees From Leading Organizations Trust Amity For Lifelong Learning
        </h2>
      </div>
      <div className="homePartner-content">
        {image.map((x, index) => (
          <div className="homePartner-item" key={index}>
            <Image src={x.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePartner;
