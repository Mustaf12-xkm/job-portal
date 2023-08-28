import React, { useContext } from "react";
import { Createcontext } from "./AppContext";
import Post from "./Post";


function Joplist({filtereddata,locationQuery}) {
    let { state } = useContext(Createcontext);
    
    const displayPosts =  locationQuery ? filtereddata : state.posts;
    
  return (
    <div>
      {displayPosts.map((post) => (
      
        <Post key={post.id} posts={post} />
      ))}
    </div>
  );
}

export default Joplist;
