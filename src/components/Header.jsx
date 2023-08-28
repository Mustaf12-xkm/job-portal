import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Createcontext } from "./AppContext";
import Heroimage from "./Heroimage";
import Search from "./Search";

function Header() {
  const { state, dispatch } = useContext(Createcontext);
  return (
    <>
      <div className="fixed top-0 right-0 left-0 shadow  bg-slate-100   ">
        <div className="flex justify-between items-center lg:w-[70%] vvsm:w-full mx-auto h-[5rem] px-2 ">
          <div className="logo   text-[20px] uppercase font-semibold">logo</div>
          <ul className="text-[20px] font-medium capitalize space-x-3 flex">
            <Link
              to={"/findjop"}
              className="hover:text-slate-500  transition-colors duration-75"
            >
              find jop
            </Link>
           

          {state.Auth.IsAuthenticated &&   <Link
              to={"/addpost"}
              className="hover:text-slate-500  transition-colors duration-75"
            >
              upload jops
            </Link>}
            <li>About us</li>
          </ul>
          <div>
            {state.Auth.IsAuthenticated ? (
              <div className=" flex">
                <div className="mr-[10px] font-mono text-green-900  text-[20px]">
                  {" "}
                  {state.Auth.CurrentUser.username}
                </div>
                <button
                  className=" font-semibold"
                  onClick={() => dispatch({ type: "logout" })}
                >
                  logout
                </button>
              </div>
            ) : (
              <Link
                to={"/login"}
                className="hover:text-slate-500  transition-colors duration-75"
              >
                login
              </Link>
            )}
            
          </div>
        </div>
      </div>
      <Heroimage />
    
    </>
  );
}

export default Header;
