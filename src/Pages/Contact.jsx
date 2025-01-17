import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function Contact() {
  return (
    <div>
      <div className="bg-black/30 max-w-4xl rounded-[40px] p-5 h-[75%] mb-[30%] mt-16 ml-[18%]">
        <h1 className="font-bold font-serif mx-6 text-4xl p-5">
          This is my contact!
        </h1>
        <div className="flex p-0">
          <div className="grid grid-rows-3 mx-0 p-0">
            <h2 className="flex items-center mx-10 p-1 font-bold">
              <MdOutlineEmail />
              <span>:Tromanjr52@gmail.com</span>
            </h2>
            <h2 className="flex items-center mx-10 p-1 font-bold">
              <MdOutlineEmail />
              <span>:romanosoledad@yahoo.com</span>
            </h2>
            <h3 className="flex items-center mx-10 p-1 font-bold">
              <FaPhone />
              <span>:09753012275</span>
            </h3>
          </div>
          <img
            className="flex h-[70%] ml-[25%] p-2 rounded-[40px] w-[30%]"
            src="../Roman A. Soledad Jr-2x2Pic.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
