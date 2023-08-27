import React, { useContext, useState } from "react";
import { Createcontext } from "./AppContext";
import { useNavigate } from "react-router-dom";

const CommentSection = ({ postId }) => {
  const { state, addcomment } = useContext(Createcontext);
  const [activeTab, setActiveTab] = useState("view");
  const [comment, setComment] = useState("");
let navigate=useNavigate()
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment === "") {
      alert("Please enter a comment");
    } else {
      const newComment = {
        userName: state.Auth.CurrentUser.username,
        userImage: state.Auth.CurrentUser.profile,
        comment
      };
      addcomment(newComment, postId);
      setComment(""); 
      setActiveTab("view")
    }
  };

  return (
    <div>
      <div className="flex mt-2">
        <button
          className={`${
            activeTab === "view" ? "bg-blue-500" : "bg-gray-500"
          } hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-tl rounded-bl`}
          onClick={() => handleTabChange("view")}
        >
          View Comments
        </button>
        <button
          className={`${
            activeTab === "add" ? "bg-green-500" : "bg-gray-500"
          } hover:bg-green-600 text-white font-bold py-2 px-4 rounded-tr rounded-br`}
          onClick={() => handleTabChange("add")}
        >
          Add Comment
        </button>
      </div>
      <div className="p-4">
        {activeTab === "view" ? (
          state.posts.map((post) => {
            if (post.id === postId) {
              if (post.comments){
                return (
                  <div key={post.id}>
                    {post.comments.map((comment, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex items-center mb-2">
                          <img
                            src={URL.createObjectURL(comment.userImage)}
                            className="w-10 h-10 rounded-full mr-2"
                          />
                          <span className="font-bold">{comment.userName}</span>
                        </div>
                        <p>{comment.comment}</p>
                      </div>
                    ))}
                  </div>
                );
              }
            }
            return null;
          })
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="comment">Comment:</label>
              <textarea
                onChange={(e) => setComment(e.target.value)}
                id="comment"
                value={comment}
                className="border border-gray-400 py-2 px-3 rounded w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit Comment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
