import React from "react";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import image1 from "../images/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="upperFooter mt-20">
        <p className="font-medium text-xl text-gray-700 text-center md:text-3xl lg:text-4xl">
          We're Here For You
        </p>
        <p className="text-center text-xs text-gray-600 md:text-lg lg:text-xl pt-1">
          Everyday | 8am - 11 pm
        </p>
        <div className="social grid grid-cols-2 mt-16 gap-10 m-3 sm:grid-cols-3">
          <div className="email text-center">
            <h1 className="font-bold text-gray-700 text-center md:text-2xl">
              Email
            </h1>
            <p className="text-gray-600">contact@patilkaki.com</p>
          </div>
          <div className="contact text-center">
            <h1 className="font-bold text-gray-700 text-center md:text-2xl">
              Call
            </h1>
            <p className="text-gray-600">+918591336124</p>
          </div>

          <div className="icon text-center justify-self-center w-full hidden sm:block">
            <h1 className="font-bold text-gray-700 text-center md:text-2xl ">
              Social
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600 ">
              <FaEnvelope />
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="icon text-center justify-self-center w-full sm:hidden">
          <h1 className="font-bold text-gray-700 text-center md:text-2xl ">
            Social
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-600 ">
            <FaEnvelope />
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className="lowerFooter bg-slate-200 mt-9 ">
        <div className="logo pt-5 ">
          <img className="w-56 mx-auto" src={image1} />
        </div>
        <div className="grid grid-cols-2 p-5 m-5 md:grid-cols-4 md:w-[80vw] md:mx-auto ">
          <div className="bestSeller">
            <h2 className="font-bold text-gray-700 ">BEST SELLERS</h2>
            <p>Ukadiche Modak</p>
            <p>Puranpoli</p>
            <p>Bhajni Chakli</p>
          </div>

          <div className="categories pb-5">
            <h2 className="font-bold text-gray-700 ">CATEGORIES</h2>
            <p>Ladoo's</p>
            <p>Traditional</p>
            <p>Namkeen</p>
          </div>

          <div className="others">
            <h2 className="font-bold text-gray-700  ">OTHERS</h2>
            <p>Refunds & Returns</p>
            <p>Shipping Policy</p>
            <p>Bulk Order</p>
            <p>Get Franchise</p>
          </div>

          <div className="address">
            <p>
              PATILKAKI ECOM VENTURES PVT LTD 34/265, Anand Nagar, Vakola,
              Santacruz East, Mumbai 400055, Maharashtra , India
            </p>
          </div>
        </div>
        <div className="text-center font-bold text-gray-700 pb-5">
            <h1>+918591336124</h1>
            <h1>contact@patilkaki.com</h1>
            </div>

            <div className="border-t-2 border-t-gray-700 p-3 text-center">
              <p>2024 All Rights Reserved. Patil Kaki Ecom Ventures Pvt Ltd. (CIN - U15100MH2022PTC377994) | Privacy Policy | Terms & Conditions</p>

      </div>
      </div>

      
      
    </div>
  );
};

export default Footer;
