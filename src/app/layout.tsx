
import "./globals.css";
import Navbar from './../Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import PopupForm from './../Components/PopupForm/PopupForm';
import Footer from './../Components/Footer/Footer';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body >
        <Navbar />
        {children}
        <Footer/>
        <PopupForm/>
      </body>
    </html>
  );
}
