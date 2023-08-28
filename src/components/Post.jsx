import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Createcontext } from "./AppContext";
import { VscLocation } from "react-icons/vsc";
function Post({posts}) {
  let { state} = useContext(Createcontext);
  return (
    
    <Link to={`/detail/${posts.id}`}  className=" w-full mb-[18px]">
      <div className="shadow-md shadow-gray-200 p-[10px] pb-[30px]">
        <div className="  md:flex justify-between items-center vvsm:block ">
          <div className="flex  items-center space-x-2">
            <div className="user-image max-w-[60px] h-[60px]">
              <img
                className=" h-full object-cover rounded-[25%]"
                src={URL.createObjectURL(posts.Auhorprofileimage)}
              />
            </div>
            <div className="flex flex-col ml-[20px]">
              <span className=" font-semibold capitalize text-xl block mb-2">
               {posts.jopCategory}
              </span>
              <div>
                {" "}
                <span className="  font-light mr-[10px] text-[15px] text-neutral-900">
                 {posts.companyname}
                </span>{" "}
                <span className="  font-semibold  text-[15px]  text-amber-900 bg-indigo-200 p-1 rounded-full">
                 {posts.joptype}
                </span>{" "}
               
              </div>
            </div>
          </div>
          <div >
            {" "}
            <div className="flex  flex-col">
              {" "}
              <span className="flex items-center space-x-4  font-semibold  text-[20px]  text-amber-900 ">
           <VscLocation/> {posts.location}
              </span>{" "}
              <span className="  font-semibold  text-[15px]  text-amber-700 ">
          posted  {posts.formattedTimeDifference}
              </span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-medium py-[10px]">
        {posts.joptitle}
        </h2>
        <p className="text-xl font-light py-[10px] truncate">
        {posts.jopDescription}
        </p>
      </div>
    </Link>
  );
}

export default Post;
