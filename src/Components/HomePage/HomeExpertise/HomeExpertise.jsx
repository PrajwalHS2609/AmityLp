import React from "react";
import "./HomeExpertise.css";
import { IoMdLaptop } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";

const HomeExpertise = () => {
  const item = [
    {
      icon: <IoMdLaptop />,
      title: "Inclusive & flexible learning design",
      description:
        "Learn in a way that works best for you. With content designed using Universal Design for Learning (UDL) principles, every concept is explained through multiple formats — videos, visuals, and interactive exercises - so you can grasp ideas faster, retain them longer, and apply them confidently in real-world scenarios.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Gamified Assignments",
      description:
        "Step into the shoes of a business leader through immersive roleplay simulations. Make strategic decisions, tackle real-life business challenges, and develop leadership, problem-solving, and decision-making skills — all before you graduate.",
    },
    {
      icon: <BsFillBuildingsFill />,
      title: "Live Industry Projects",
      description:
        "Work on actual business problems alongside industry experts. Gain hands-on experience, earn exclusive project certifications, and showcase your skills to recruiters even before your final semester.",
    },

    {
      icon: <FaUsers />,
      title: "Prof. AMI - Now in a New Avatar",
      description:
        "Your AI-powered learning companion, available 24/7, guiding you through assignments, keeping you motivated, and ensuring you're never stuck — no matter where or when you study.",
    },
    {
      icon: <MdMenuBook />,
      title: "Interactive Learning Material with AI-Powered Features",
      description:
        "Study smarter, not harder, with tools that give you an edge:",
      list: [
        "Business roleplay simulations",
        "Decision-making challenges",
        "Leadership skill development",
      ],
    },
    {
      icon: <GrCertificate />,
      title: "Certification in Basics of AI",
      description:
        "Add future-ready AI skills to your MBA. With a certification in AI fundamentals, you'll graduate with a competitive edge in a market where technology and business go hand-in-hand.",
    },
  ];
  return (
    <div className="homeExpertise-container">
      <div className="homeExpertise-heading">
        <h2>Lead the Future with India&apos;s Top Ranked Online MBA</h2>
        <p>
          Gain expertise with AI-powered tools, innovative teaching approach and
          job-ready curriculum. Get personalized learning and training from the
          top faculty that encourage you to excel in your work.
        </p>
      </div>
      <div className="homeExpertise-wrapper">
        {item.map((x, index) => (
          <div className="homeExpertise-content" key={index}>
            <div className="homeExpertise-iconContainer">
              <span className="homeExpertise-icon">{x.icon}</span>
            </div>
            <div className="homeExpertise-description">
              <h4>{x.title}</h4>
              <p>{x.description}</p>
              {x.list && (
                <ul className="homeExpertise-list">
                  {x.list.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeExpertise;
