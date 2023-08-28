import React from "react";
import Image from "../assets/im.png";
function Heroimage() {
  return (
    <div className="bg-slate-100">
    <div className=" mx-auto lg:flex justify-between vsm:block  w-[70%] items-center">
      <div>
        <span className="text-[30px] font-semibold">find your dream job</span>
        <p>
          looking for job? Browse our latest job opening to view & applay to the
          best jobs today !
        </p>
      </div>
      <img className=" lg:w-auto  vsm:w-full" src={Image}/>
    </div>
    </div>
  );
}

export default Heroimage;
