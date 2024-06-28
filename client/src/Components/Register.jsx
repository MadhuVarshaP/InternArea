import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="py-[25px]">
        <p className="text-[30px] font-semibold">Sign up & Apply for Free</p>
        <p>1,50,000+ companies hiring on Intern Area</p>
      </div>
      <div className="flex justify-center space-x-5 pt-[20px]">
        <p className="font-semibold">Email</p>
        <input
          type="text"
          className="border-[2px] py-[5px] rounded-md w-[400px] px-[10px]"
          placeholder="john@example.com"
        />
      </div>
      <div className="flex justify-center space-x-5 pt-[20px]">
        <p className="font-semibold">Password</p>
        <input
          type="password"
          className="border-[2px] py-[5px] rounded-md w-[400px] px-[10px]"
          placeholder="Must be atleast 6 characters"
        />
      </div>
      <div className="flex justify-center space-x-5 pt-[20px]">
        <p className="font-semibold">Name</p>
        <input
          type="text"
          className="border-[2px] py-[5px] rounded-md w-[400px] px-[10px]"
          placeholder="John Doe"
        />
      </div>
      <p className="">
        By signing up, you agree to our{" "}
        <span className="text-[#078EDD]">Terms and Conditions</span>
      </p>
      <button className="bg-[#078EDD] text-white rounded-md p-[10px] h-fit w-[400px] my-[20px]">
        Sign Up
      </button>
      <p className="py-[20px]">
        Already Registered?{" "}
        <Link to="/login" className="text-[#078EDD]">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
