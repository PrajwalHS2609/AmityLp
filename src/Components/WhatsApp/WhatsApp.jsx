"use client";
import React from "react";
import "./WhatsApp.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Logo from "@/Images/favicon.png";
const WhatsApp = () => {
  // let [visible, setVisible] = useState();
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVisible(true);
  //     setTimeout(() => {
  //       setVisible(false);
  //     }, 10000); // Hide after 5 seconds
  //   }, 10000); // Show every 10 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);
  return (
    <div className="whatsAppContainer">
      {/* <div className="whatsAppContent">Hello</div> */}
      {/* <a href="https://wa.me/919742232700?text=Hello" >
        <Image src={whatsApp} alt="" />
      </a> */}
      <FloatingWhatsApp
        phoneNumber="918302129336"
        accountName="Amity"
        avatar={Logo.src} // Optional
        statusMessage="Typically replies within 5 min" // Optional
        chatMessage="Trusted by 120+ working professionals for Amity Online MBA admissions in January 2026.  📞 Call/WhatsApp: 8302129336" // Optional
        placeholder="Type a message..." // Optional
      />
    </div>
  );
};

export default WhatsApp;
