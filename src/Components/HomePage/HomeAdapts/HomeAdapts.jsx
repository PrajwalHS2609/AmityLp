import React from "react";
import "./HomeAdapts.css";
const HomeAdapts = () => {
  return (
    <div className="homeAdapts-container">
      <div className="homeAdapts-wrapper">
        <iframe
          src="https://player.vimeo.com/progressive_redirect/playback/1110917250/rendition/1080p/file.mp4?loc=external&signature=0827eeecfa63e497a7f2a6f19c0c3dd9c0dfa8dc3a8bfac4bac3ac85910a524c"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      <div className="homeAdapts-content">
        <h3>Learning That Adapts to You</h3>
        <span>
          {" "}
          <p>
            According to studies, approximately 53% of learners disengage when
            teaching doesn’t match their preferred style.
          </p>
          <p>
            At Amity University Online, our MBA is designed with flexible
            learning design principles at its core. This approach recognizes
            that every learner is unique and ensures that content is delivered
            in ways that suit different learning styles — visual, auditory, and
            interactive.
          </p>
          <p>
            By making learning flexible, inclusive, and accessible, our
            exclusive learning design not only removes barriers but also
            enhances motivation, engagement, and overall outcomes, empowering
            every student to achieve their best.
          </p>
        </span>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default HomeAdapts;
