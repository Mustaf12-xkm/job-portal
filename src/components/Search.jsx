import React, { useContext } from "react";
import Post from "./Post";
import Joplist from "./Joplist";
import { Createcontext } from "./AppContext";

function Search() {
   let {state}=useContext(Createcontext)
  return (
    <div className="flex  space-x-2 items-start w-[90%] mx-auto mt-3 ">
      <div className="w-[22.5%] border border-[#e2dfdf] p-4">
        <div className="flex  justify-between border border-[#e2dfdf] p-2">
          <span>Filter</span>
          <span className="text-red-900  cursor-pointer">Clear All</span>
        </div>
        <div className="  mt-4">
          <span className="mb-4">jop type</span>
          <div className="grid grid-cols-2 p-2 border border-[#e2dfdf] mb-4 ">
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="myCheckbox" className="ml-2 text-gray-700">
                Checkbox Label
              </label>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="myCheckbox" className="ml-2 text-gray-700">
                Checkbox Label
              </label>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="myCheckbox" className="ml-2 text-gray-700">
                Checkbox Label
              </label>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="myCheckbox" className="ml-2 text-gray-700">
                Checkbox Label
              </label>
            </div>
          </div>
          <span>onsite/remote</span>
          <div className="grid grid-cols-2 border border-[#e2dfdf] ">
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="myCheckbox" className="ml-2 text-gray-700">
                Checkbox Label
              </label>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="myCheckbox" className="ml-2 text-gray-700">
                Checkbox Label
              </label>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="myCheckbox" className="ml-2 text-gray-700">
                Checkbox Label
              </label>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="myCheckbox" className="ml-2 text-gray-700">
                Checkbox Label
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start  space-x-4 w-[67.5%]  p-2">
        <div className=" flex w-full space-x-2 border border-[#e2dfdf] p-2">
       
          <input
            type="text"
            placeholder="Search job title"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-[50%] space-x-2"
          />    
          <input
            type="text"
            placeholder="Search by country"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-[50%]"
          />
        </div>
        <span className="p-4">{state.posts.length} job results</span>
        <Joplist/>
      </div>
    </div>
  );
}

export default Search;
