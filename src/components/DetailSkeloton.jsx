import React from 'react'

  
const SkeletonItem = () => (
  <div className="animate-pulse shadow-md shadow-gray-200 p-[10px] pb-[30px]">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="user-image max-w-[60px] h-[60px] bg-gray-300 rounded-[25%]"></div>
        <div className="flex flex-col ml-[20px]">
          <span className="font-semibold capitalize text-xl block mb-2 bg-gray-300 h-6 w-1/2"></span>
          <div>
            <span className="font-light mr-[10px] text-[15px] text-neutral-900 bg-gray-300 h-4 w-1/4"></span>
            <span className="font-semibold text-[15px] text-amber-900 bg-indigo-200 p-1 rounded-full h-4 w-1/4"></span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <span className="font-semibold text-[20px] text-amber-900 bg-gray-300 h-6 w-1/4"></span>
          <span className="font-semibold text-[15px] text-amber-700 bg-gray-300 h-4 w-1/4"></span>
        </div>
      </div>
    </div>
    <div className="h-[400px] bg-gray-300 my-6 rounded-md"></div>
    <h2 className="text-2xl font-medium py-[10px] bg-gray-300 h-6 w-[70%]"></h2>
    <p className="text-xl font-light py-[10px] bg-gray-300 h-4 w-[90%]"></p>
    <div className="flex justify-between mt-2">
      <div className="text-lg text-red-600 font-semibold bg-gray-300 h-6 w-1/4"></div>
      <div className="flex space-x-2">
        <div className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded bg-gray-300"></div>
        <div className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded bg-gray-300"></div>
      </div>
    </div>
    <div className="flex justify-between mt-6 items-center border-b-2 border-[#eae8e8] pb-2">
      <div className="flex flex-col">
        <span className="text-[#41102e] text-lg font-semibold bg-gray-300 h-6 w-[70%]"></span>
        <span className="text-[#41102e] text-lg font-semibold bg-gray-300 h-6 w-[70%]"></span>
      </div>
      <div className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer"></div>
    </div>
  </div>
);

function Skeloton() {
  return (
    <div>{SkeletonItem}</div>
  )
}

export default Skeloton