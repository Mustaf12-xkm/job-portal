import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Createcontext } from "./AppContext";
import { formatDistanceToNow } from "date-fns";
function Addpost() {
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
  const options = jobCategories.map(category =>
    <option key={category} value={category}>
      {category}
    </option>
  );
  let navigate = useNavigate();
  const [joptype, setjoptype] = useState("");
  const [joptitle, setjoptitle] = useState("");
  const [location, setlocation] = useState("");
  const [jopDescription, setjopDescription] = useState("");
  const [enddate, setjopdate] = useState("");
  const [companyname, setcompanyname] = useState("");
  const [jopCategory, setjopCategory] = useState("");
  const [jopimage, setjopimage] = useState(null);
  const startDate = new Date();
  let timestamp = startDate;
  const [timeAgo, setTimeAgo] = useState(
    formatDistanceToNow(new Date(timestamp), { addSuffix: true })
  );

  useEffect(
    () => {
      const intervalId = setInterval(() => {
        setTimeAgo(
          formatDistanceToNow(new Date(timestamp), { addSuffix: true })
        );
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    },
    [timestamp]
  );
  let mydata = null;
  let { Addjop, state } = useContext(Createcontext);

  const handlesumbit = e => {
    e.preventDefault();

    if (
      joptype == "" ||
      joptitle == "" ||
      location === "" ||
      jopDescription == "" ||
      enddate == "" ||
      companyname == "" ||
      jopCategory == "" ||
      jopimage == null
    ) {
      alert("Please fill in all the fields");
      return;
    } else {
      const formattedStartDate = startDate.toISOString().split("T")[0];

      mydata = {
        id: Date.now(),
        Author: state.Auth.CurrentUser.username,
        Authorgmail: state.Auth.CurrentUser.email,
        Auhorprofileimage: state.Auth.CurrentUser.profile,
        formattedTimeDifference: timeAgo,
        startDate: formattedStartDate,
        enddate,
        joptitle,
        location,
        jopDescription,
        joptype,
        companyname,
        jopCategory,
        jopimage
      };
    }
    Addjop(mydata);
    navigate("/findjop");
  };

  return (
    <form
      onSubmit={handlesumbit}
      className="bg-gray-100 p-8 rounded-lg shadow-md w-[50%]  mx-auto my-4"
    >
      <div className="flex w-full space-x-2">
        {" "}<div className="mb-6 w-[50%]">
          <label
            htmlFor="jobType"
            className="block text-gray-700 font-medium mb-2"
          >
            Job Type:
          </label>
          <select
            onChange={e => setjoptype(e.target.value)}
            id="jobType"
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
            onChange={e => setjoptitle(e.target.value)}
            type="text"
            id="jobTitle"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex w-full space-x-2">
        {" "}<div className="mb-6 w-[50%]">
          <label
            htmlFor="company"
            className="block text-gray-700 font-medium mb-2"
          >
            location:
          </label>
          <input
            onChange={e => setlocation(e.target.value)}
            type="text"
            id="company"
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
            onChange={e => setcompanyname(e.target.value)}
            type="text"
            id="company"
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
          onChange={e => setjopDescription(e.target.value)}
          id="jobDescription"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="jobDescription"
          className="block text-gray-700 font-medium mb-2"
        >
          end date:
        </label>
        <input
          onChange={e => setjopdate(e.target.value)}
          type="date"
          id="enddate"
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
          onChange={e => setjopCategory(e.target.value)}
          id="jobCategory"
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
          onChange={e => setjopimage(e.target.files[0])}
          type="file"
          id="jobImage"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        />
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

export default Addpost;
