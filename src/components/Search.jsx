import React, { useContext, useState } from "react";

import Joplist from "./Joplist";
import { Createcontext } from "./AppContext";

function Search() {
  let { state } = useContext(Createcontext);

 
  const [locationQuery, setlocationQuery] = useState("");

  const posts = state.posts;

  const filteredPosts = posts.filter(post => {
    const location = post.location
      .toLowerCase()
      .includes(locationQuery.toLowerCase());
    return location;
  });

  return (
    <div className="flex  space-x-2 items-start w-[90%] mx-auto mt-3 ">
      <div className=" flex flex-col justify-start mx-auto  space-x-4 lg:w-[60%]   vsm:w-[100%]  p-2  ">
        <div className=" flex w-full space-x-2 border border-[#e2dfdf] p-2">
          <input
            onChange={e => setlocationQuery(e.target.value)}
            type="text"
            placeholder="Search by country"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <span className="p-4">
          {filteredPosts
            ? <span className="text-[20px]">
                {filteredPosts.length} job results
              </span>
            : <span className="text-[20px] text-stone-700" >
                {state.posts.length} job results
              </span>}
        </span>
        <Joplist
          filtereddata={filteredPosts}
          locationQuery={locationQuery}
        
        />
      </div>
    </div>
  );
}

export default Search;
