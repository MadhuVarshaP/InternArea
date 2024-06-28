import React, { useState } from "react";
import JobCard from "./JobCard";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";


function LatestJob() {
  //choose option should be selected
  const [selected, setSelected]= useState(null)

  //change to be done after clicking the option
  const selectOption = (option) =>{ 
      setSelected(option)
  }
  return (
    <div className="py-[25px]">
      <p className="text-[24px] font-medium py-[25px]">Latest Jobs for you</p>
      <div className="space-x-5">
        <button onClick={()=>selectOption('Big Data')} className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${selected=== 'Big Data' ? 'bg-[#078EDD] text-white' : 'bg-white text-black'}`}>
          Big Data
        </button>
        <button onClick={()=>selectOption('Blockchain')} className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${selected==='Blockchain' ? 'bg-[#078EDD] text-white' : 'bg-white text-black'}`}>
          Blockchain
        </button>
        <button onClick={()=>selectOption('Data Science')} className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${selected==='Data Science' ? 'bg-[#078EDD] text-white' : 'bg-white text-black'}`}>
          Data Science
        </button>
        <button onClick={()=>selectOption('Full Stack')} className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${selected==='Full Stack' ? 'bg-[#078EDD] text-white' : 'bg-white text-black'}`}>
          Full Stack
        </button>
        <button onClick={()=>selectOption('Marketing')} className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${selected==='Marketing' ? 'bg-[#078EDD] text-white' : 'bg-white text-black'}`}>
          Marketing
        </button>
        <button onClick={()=>selectOption('Human Resource')} className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${selected==='Human Resource' ? 'bg-[#078EDD] text-white' : 'bg-white text-black'}`}>
          Human Resource
        </button>
        <button onClick={()=>selectOption('Engineering')} className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${selected==='Engineering' ? 'bg-[#078EDD] text-white' : 'bg-white text-black'}`}>
          Engineering
        </button>
        <button onClick={()=>selectOption('Part-Time')} className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${selected==='Part-Time' ? 'bg-[#078EDD] text-white' : 'bg-white text-black'}`}>
          Part-Time
        </button>
        <button onClick={()=>selectOption('Work from home')} className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${selected==='Work from home' ? 'bg-[#078EDD] text-white' : 'bg-white text-black'}`}>
          Work from home
        </button>
      </div>
      <div className="flex space-x-5 justify-center">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
      <div className="flex justify-center space-x-20 py-[20px]">
        <button className="rounded-[999px] flex justify-center items-center border-[2px] p-[8px]">
          <GrFormPrevious className="h-[30px] w-[30px]" />
        </button>
        <button className="rounded-[999px] flex justify-center items-center border-[2px] p-[8px]">
          <GrFormNext className="h-[30px] w-[30px]" />
        </button>
      </div>
    </div>
  );
}

export default LatestJob;
