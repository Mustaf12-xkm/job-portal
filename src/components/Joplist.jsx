import React, { useContext } from "react";
import { Createcontext } from "./AppContext";
import Post from "./Post";


function Joplist() {
    let { state } = useContext(Createcontext);
  return (
    <div>
      {state.posts.map((post) => (
      
        <Post key={post.id} posts={...post} />
      ))}
    </div>
  );
}

export default Joplist;
