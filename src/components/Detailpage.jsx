import React, { useContext } from "react";
import Addcomment from "./Addcomment";
import { Createcontext } from "./AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { isAfter } from "date-fns";
function Detailpage() {
  let { id } = useParams();
  let navigate = useNavigate();
  let { state, Deletepost, increaseapplicants } = useContext(Createcontext);
  let job = state.posts.find(post => post.id === parseInt(id));
  let startDate = new Date(job.startDate);
  let endDate = new Date(job.enddate);
  console.log(endDate);
  const isStartDateAfterEndDate = isAfter(startDate, endDate);
  const handleButtonClick = () => {
    const email = job.Authorgmail;
    const name = job.Author;
    const subject = "Resume Submission";
    const body = `Dear Hiring Manager,\n\nPlease find attached my resume for your consideration.\n\nThank you.\n\nSincerely, ${name}`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
    increaseapplicants(job.id);
  };
  return (
    <div>
      <div className=" w-[70%] mx-auto mb-[18px]">
        <div className="shadow-md shadow-gray-200 p-[10px] pb-[30px]">
          <div className=" flex justify-between items-center ">
            <div className="flex  items-center space-x-2">
              <div className="user-image max-w-[60px] h-[60px]  ">
                <img
                  className=" h-full object-cover rounded-[25%]"
                  src={URL.createObjectURL(job.Auhorprofileimage)}
                />
              </div>
              <div className="flex flex-col ml-[20px]">
                <span className=" font-semibold capitalize text-xl block mb-2">
                  {job.jopCategory}
                </span>
                <div>
                  {" "}<span className="  font-light mr-[10px] text-[15px] text-neutral-900">
                    {job.companyname}
                  </span>{" "}
                  <span className="  font-semibold  text-[15px]  text-amber-900 bg-indigo-200 p-1 rounded-full">
                    {job.joptype}
                  </span>{" "}
                </div>
              </div>
            </div>
            <div>
              {" "}<div className="flex  flex-col">
                {" "}<span className="  font-semibold  text-[20px]  text-amber-900 ">
                  {job.location}
                </span>{" "}
                <span className="  font-semibold  text-[15px]  text-amber-700 ">
                  {job.formattedTimeDifference}
                </span>
              </div>
            </div>
          </div>

          {job.jopimage &&
            <div>
              <img
                className=" w-full h-[400px] my-6 object-cover rounded-md"
                src={URL.createObjectURL(job.jopimage)}
              />
            </div>}
          <h2 className="text-2xl font-medium py-[10px]">
            {job.joptitle}
          </h2>
          <p className="text-xl font-light py-[10px] ">
            {job.jopDescription}
          </p>
          <div className="flex justify-between mt-2">
            
            {job.applicants? ( <div className=" text-lg text-red-600 font-semibold">
              Applicants:  {job.applicants}
              </div>):( <div className=" text-lg text-red-600 font-semibold">
              Applicants: 0
              </div>)   }
             
            {state.Auth.CurrentUser &&
              job.Author === state.Auth.CurrentUser.username &&
              <div className=" flex space-x-2">
                <button
                  onClick={() => navigate(`/Editpost/${job.id}`)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    Deletepost(job.id);
                    navigate(-1);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Delete
                </button>
              </div>}
          </div>
          <div className="flex justify-between mt-6  items-center border-b-2 border-[#eae8e8] pb-2">
            <div className=" flex flex-col">
              <span className="text-[#41102e] text-lg font-semibold">
                started date: {job.startDate}
              </span>
              <span className="text-[#41102e] text-lg font-semibold">
                End date: {job.enddate}
              </span>
            </div>
            {isStartDateAfterEndDate
              ? <div className=" text-red-700 font-semibold text-[20px]">
                  Deadline Passed away
                </div>
              : <div
                  onClick={handleButtonClick}
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
                >
                  resume CV
                </div>}
          </div>
          <Addcomment postId={job.id} />
        </div>
      </div>
    </div>
  );
}

export default Detailpage;
