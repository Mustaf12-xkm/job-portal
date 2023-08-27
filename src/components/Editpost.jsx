import React, { useContext, useState } from "react";
import { Createcontext } from "./AppContext";
import { useNavigate, useParams } from "react-router-dom";

function Editpost() {
  const jobCategories = [
    "Technology",
    "Finance",
    "Marketing",
    "Sales",
    "Customer Service",
    "Human Resources",
    "Administration",
    "Engineering",
    "Design",
    "Healthcare",
    "Education",
    "Hospitality",
    "Retail",
    "Transportation",
    "Construction",
    "Consulting",
    "Media",
    "Legal",
    "Other"
  ];
  const options = jobCategories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));
  let { Editjop, state } = useContext(Createcontext);
  let { id } = useParams();
  let job = state.posts.find((post) => post.id === parseInt(id));

  let navigate = useNavigate();
  const [joptype, setjoptype] = useState(job.joptype || "");
  const [joptitle, setjoptitle] = useState(job.joptitle || "");
  const [location, setlocation] = useState(job.location || "");
  const [jopDescription, setjopDescription] = useState(job.jopDescription || "");
  const [enddate, setjopdate] = useState(job.enddate || "");
  const [companyname, setcompanyname] = useState(job.companyname || "");
  const [jopCategory, setjopCategory] = useState(job.jopCategory || "");
  const [jopimage, setjopimage] = useState(job.jopimage || null);
  let updated = null;


  const handlesumbit = (e) => {
    e.preventDefault();

    if (
      joptype == "" ||
      joptitle == "" ||
      location === "" ||
      jopDescription == "" ||
      enddate == "" ||
      companyname == "" ||
      jopCategory == "" ||
      jopimage === {}
    ) {
      alert("Please fill in all the fields");
      return;
    } else {
    
      updated = {
        id: job.id,
        Author: job.Author,
        formattedTimeDifference: job.formattedTimeDifference,
        startDate: job.startDate,
        Authorgmail:job.Authorgmail, 
        Auhorprofileimage: job.Auhorprofileimage,
        enddate,
        joptitle,
        location,
        jopDescription,
        joptype,
        companyname,
        jopCategory,
        jopimage,
        comments: job.comments
      };
    }
    Editjop(updated);
    navigate("/findjop");
  };
if(!job) return <h1>not found</h1>
  return (
    
    <form
      onSubmit={handlesumbit}
      className="bg-gray-100 p-8 rounded-lg shadow-md w-[50%]  mx-auto my-4"
    >
      <div className="flex w-full space-x-2">
        {" "}
        <div className="mb-6 w-[50%]">
          <label
            htmlFor="jobType"
            className="block text-gray-700 font-medium mb-2"
          >
            Job Type:
          </label>
          <select
            onChange={(e) => setjoptype(e.target.value)}
            id="jobType"
            value={joptype}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Job Type</option>
            <option value="freelancer">freelancer</option>
            <option value="intenership">intenership</option>
            <option value="full time">full time</option>
            <option value="volunteer">volunteer</option>
          </select> 
        </div>
        <div className="mb-6 w-[50%]">
          <label
            htmlFor="jobTitle"
            className="block text-gray-700 font-medium mb-2"
          >
            Job Title:
          </label>
      
          <input
            onChange={(e) => setjoptitle(e.target.value)}
            type="text"
            id="jobTitle"
            value={joptitle}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex w-full space-x-2">
        {" "}
        <div className="mb-6 w-[50%]"> 
          <label
            htmlFor="company"
            className="block text-gray-700 font-medium mb-2"
          >
            location:
          </label>
          <input
            onChange={(e) => setlocation(e.target.value)}
            type="text" 
            jopimage
            id="company"
            value={location}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6 w-[50%]">
          <label
            htmlFor="company"
            className="block text-gray-700 font-medium mb-2"
          >
            Company:
          </label>
          <input
            onChange={(e) => setcompanyname(e.target.value)}
            type="text"
            id="company"
            value={companyname}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="jobDescription"
          className="block text-gray-700 font-medium mb-2"
        >
          Job Description:
        </label>
        <textarea
          onChange={(e) => setjopDescription(e.target.value)}
          id="jobDescription"
          value={jopDescription}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <div className="mb-6">
        <label
          htmlFor="jobDescription"
          className="block text-gray-700 font-medium mb-2"
        >
          end date:
        </label>
        <input
          onChange={(e) => setjopdate(e.target.value)}
          type="date"
          value={enddate}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="jobCategory"
          className="block text-gray-700 font-medium mb-2"
        >
          Job Category:
        </label>
        <select
          onChange={(e) => setjopCategory(e.target.value)}
          id="jobCategory"
          value={jopCategory}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Job Category</option>
          {options}
        </select>
      </div>

      <div className="mb-6">
        <label
          htmlFor="jobImage"
          className="block text-gray-700 font-medium mb-2"
        >
          Job Image:
        </label>
        <input
          onChange={(e) => setjopimage(e.target.files[0])}
          type="file"
          id="jobImage"
        
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        />
        {jopimage && <span>{jopimage.name}</span>}
      </div>

      <button
        type="submit"
        className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md"
      >
        Post Job
      </button>
    </form>
  );
}

export default Editpost;
