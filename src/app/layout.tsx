"use client"

import "./globals.css";
import Navbar from './../Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import PopupForm from './../Components/PopupForm/PopupForm';
import Footer from './../Components/Footer/Footer';
import WhatsApp from './../Components/WhatsApp/WhatsApp';
import Loader from './../Components/Loader/Loader';
import { useEffect, useState } from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    // fake loading for animation effect
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body >
        <Navbar />
        {loading ? <Loader /> : children}
        <Footer/>
        <PopupForm/>
        <WhatsApp/>
      </body>
    </html>
  );
}
