import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { IoCashOutline } from "react-icons/io5";
import { FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";

function JobCard() {
  return (
    <div className="border-[2px] border-white shadow-md w-[400px] p-[10px] flex flex-col text-start rounded-lg m-[20px]">
      <div className="flex space-x-1 items-center">
        <GoArrowUpRight className="h-[30px]" />
        <p>Actively Hiring</p>
      </div>
      <div className="py-[15px] border-b-[2px]">
        <p className="text-[22px] font-semibold">Job title</p>
        <p className="text-gray-700">TCS Ltd.</p>
      </div>
      <div className="py-[20px] flex flex-col space-y-2">
        <div className="flex items-center space-x-1">
          <CiLocationOn className="h-[25px] w-[25px]" />
          <p>Mumbai, India</p>
        </div>
        <div className="flex items-center space-x-1">
          <IoCashOutline className="h-[25px] w-[25px]" />
          <p>10,000-20,000</p>
        </div>

        <div className="flex justify-between py-[10px]">
          <p>Jobs</p>
          <Link to="/job" className="flex space-x-1 items-center" >
            <button className="text-[#078EDD]">View Details</button>
            <FcNext className="h-[18px] w-[20px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
