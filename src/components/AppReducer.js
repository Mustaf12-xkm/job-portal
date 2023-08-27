export const initialState = {
  Auth: {
    IsAuthenticated: false,
    CurrentUser: null,
    Autherror: false
  },
  users: [],
  posts: [],


};

const AuthReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "register":
      return {
        ...state,
        users: [...state.users, payload]
      };
    case "login": {
      return {
        ...state,
        Auth: {
          IsAuthenticated: payload.IsAuthenticated,
          CurrentUser: payload.currentUser,
          Autherror: payload.Autherror
        }
      };
    }
    case "logout": {
      return {
        ...state,
        Auth: {
          IsAuthenticated: false,
          CurrentUser: null
        }
      };
    }

    case "addjop": {
      return {
        ...state,
        posts: [...state.posts, payload]
      };
    }
    case "Editpost": {
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === payload.id ? { ...payload } : post
        )
      };
    }
    case "Deletepost": {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== parseInt(payload))
      };
    }
    case "addcomment": {
      let comments
      const { postId, comment } = payload;
      const updatedpost = state.posts.map((p) => {
        if (p.id === parseInt(postId)) {
          comments = p.comments && Array.isArray(p.comments) ? p.comments : [];
          return {
            ...p,
            comments:[...comments, comment]
          };
        }
        return p;
      });
      return{
        ...state,
       posts: updatedpost,
      }
    }
    case "addapplicant": {
      const { postId } = payload;
      const updatedPosts = state.posts.map((post) => {
        if (post.id === parseInt(postId)) {
          return {
            ...post,
            applicants: (post.applicants || 0) + 1,
          };
        }
        return post;
      });
    
      return {
        ...state,
        posts: updatedPosts,
      };
    }
    default:
      throw new Error("Invalid");
  }
};

export default AuthReducer;
