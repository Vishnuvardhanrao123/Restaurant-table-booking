// import React from 'react';
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";
import { MdElectricMoped } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";

const Services = () => {
  return (
    <div className=" bg-gray-800 text-white">
      <div className="container py-5">
        <div className=" ">
          <h1 className="text-4xl font-bold">
            Eat-<span className="text-orange-500">Food</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            dolorem fugit sint nesciunt earum debitis porro minima iure ut
            dolores harum ipsum, expedita provident. Perferendis consequatur
            sequi at suscipit provident cum doloremque laborum, similique
            deserunt.
          </p>
        </div>
        <div className="flex gap-1 ">
          <FaWhatsappSquare className="w-10 h-10" />
          <FaFacebookSquare className="w-10 h-10" />
          <FaTwitterSquare className="w-10 h-10" />
          <FaSquareWhatsapp className="w-10 h-10" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 ">
          <div className="flex justify-center items-center gap-3 cursor-pointer">
            <FaMobileAlt className="text-2xl" />
            <p className="text-2xl font-semibold">Online Booking</p>
          </div>
          <div className="flex justify-center items-center gap-3 cursor-pointer">
            <MdOutlineFastfood className="text-2xl" />
            <p className="text-2xl font-semibold">Fast Food</p>
          </div>
          <div className="flex justify-center items-center gap-3 cursor-pointer">
            <IoMdContacts className="text-2xl" />
            <p className="text-2xl font-semibold">Get in Touch</p>
          </div>
          <div className="flex justify-center items-center gap-3 cursor-pointer">
            <MdElectricMoped className="text-2xl" />
            <p className="text-2xl font-semibold">Delivery</p>
          </div>
        </div>
      </div>

      <footer className="w-full bg-gray-800 text-white text-center py-4 ">
        <p>
          Copyright © {new Date().getFullYear()}Table reservation. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};
export default Services;
