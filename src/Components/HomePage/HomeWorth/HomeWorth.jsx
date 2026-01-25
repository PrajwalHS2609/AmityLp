import React from "react";
import "./HomeWorth.css";
import { FaLaptop, FaSchool, FaSuitcase } from "react-icons/fa6";
import { MdAppShortcut, MdInstallMobile } from "react-icons/md";
import { RiRobot2Fill } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";
import { PiGraduationCapFill } from "react-icons/pi";
const HomeWorth = () => {
  const card = [
    {
      icon: <FaSchool />,
      title: "Pan-India Campus Access & Offline Events",
      description:
        "Enjoy access to all Amity campuses for events like orientation, mid-year meetups, on-campus connect and convocation - blending digital convenience with real-world connection.",
    },
    {
      icon: <MdInstallMobile />,
      title: "Amigo: Learning On-the-Go",
      description:
        "The Amigo app makes learning seamless and mobile-friendly. Attend live classes, track progress, access materials, and more on your schedule.",
    },
    {
      icon: <RiRobot2Fill />,
      title: "Prof. Ami: Your AI-Powered Personal Tutor",
      description:
        "Meet Prof. Ami — your always-on, AI mentor for instant doubt-solving, personalised learning tips, and smart academic support.",
    },

    {
      icon: <TbCertificate />,
      title: "Industry Certifications for Better Employability",
      description:
        "Gain an edge with in-demand certifications from top industry bodies and partners — integrated within your program to boost your skills and CV.",
    },
    {
      icon: <FaSuitcase />,
      title: "Internship Opportunities",
      description:
        "Access curated internships with leading companies through our corporate network, helping you gain real-world experience and stand out in the job market.",
    },
    {
      icon: <FaLaptop />,
      title: "AI-Powered Career Discovery Platform",
      description:
        "From mock interviews and resume building to job search and easy-apply tools — Amity Online’s AI-powered platform ensures you’re career-ready from day one.",
    },
    {
      icon: <MdAppShortcut />,
      title: "beSocial App for Campus Life",
      description:
        "Your virtual student hub — the beSocial app lets you network, join clubs, attend events, and be part of a vibrant, online-first community.",
    },
    {
      icon: <PiGraduationCapFill />,
      title: "Diverse learning mediums",
      description:
        "Experience diverse learning options through recorded lectures, audio books, physical books, e-books & more.",
    },
  ];
  return (
    <div className="homeWorth-container">
      <div className="homeWorth-wrapper">
        <div className="homeWorth-heading">
          <h2>Is Amity Online MBA Worth It? Let&apos;s Find Out!</h2>
          <p>Globally Recognised | Digitally Advanced | Deeply Personalised</p>
        </div>
        <div className="homeWorth-content">
          {card.map((x, index) => (
            <div className="homeWorth-itemContainer" key={index}>
              <div className="homeWorth-itemIcon">
                <span>{x.icon}</span>
              </div>
              <div className="homeWorth-itemDescription">
                <h4>{x.title}</h4>
                <p>{x.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeWorth;
