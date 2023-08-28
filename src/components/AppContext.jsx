import { createContext, useReducer } from "react";
import AppReducer, { initialState } from "./AppReducer";
import { useNavigate } from "react-router-dom";

export const Createcontext = createContext(initialState);

const Authprovider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const register = (values) => {
    dispatch({
      type: "register",
      payload: {  newuser :true, values }
    });
  };

  const login = (username, password) => {
    let user = state.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      dispatch({
        type: "login",
        payload: { IsAuthenticated: true, currentUser: user, Autherror: false }
      });
    } else {
      dispatch({
        type: "login",
        payload: { IsAuthenticated: false, currentUser: null, Autherror: true }
      });
    }
  };
  const Addjop = (jops) => {
    dispatch({ type: "addjop", payload: jops });
  };
  const Editjop = (jops) => {
    dispatch({ type: "Editpost", payload: jops });
  };
  const Deletepost = (id) => {
    dispatch({ type: "Deletepost", payload: id });
  };

  const addcomment = (comment,  postId) => {
    dispatch({ type: "addcomment", payload: { comment,   postId, } });
  };
  const increaseapplicants = ( postId) => {
    dispatch({ type: "addapplicant", payload:  {postId}});
  };

  const Authcontextvalue = {
    register,
    login,
    state,
    dispatch,
    Addjop,
    Editjop,
    Deletepost,
    addcomment,
    increaseapplicants
  };

  return (
    <Createcontext.Provider value={Authcontextvalue}>
      {children}
    </Createcontext.Provider>
  );
};

export default Authprovider;
