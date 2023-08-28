import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login.jsx";
import { RouterProvider } from "react-router-dom";
import Registration from "./components/Registration.jsx";
import Addpost from "./components/Addpost.jsx";
import Authprovider from "./components/AppContext.jsx";
import Search from "./components/Search.jsx";
import Findjop from "./pages/Findjop.jsx";
import Detailpage from "./components/Detailpage.jsx";
import Editpost from "./components/Editpost.jsx";
const renderpages = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
   
      {
        path: "/edit/:id",
        element: <Editpost />
      },
  
      {
        path: "/detail/:id",
        element: <Detailpage />
      },
      {
        path: "/addpost",
        element: <Addpost />
      }, 
      {
   
        path: "/findjop",
        element: <Findjop />
      }, 
      {
        index: true,
        element: <Findjop />
      }, 
      {
     
        path: "/Editpost/:id",
        element: <Editpost />
      }, 
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registration",
    element: <Registration />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={renderpages} />
    </Authprovider>
  </React.StrictMode>
);
