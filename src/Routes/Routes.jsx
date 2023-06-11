import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

import Features from "../pages/Home/Features/Features";
import Dashboard from "../Layout/Dashboard";
import MySelectClasses from "../pages/Dashboard/MySelectClasses/MySelectClasses";
import MyEnrolleClasses from "../pages/Dashboard/MyEnrolleClasses/MyEnrolleClasses";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import SendFeedBack from "../pages/Dashboard/SendFeedBack/SendFeedBack";




  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,

      children:[
        {
            path:'/',
            element:<Home></Home>
        },

        {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/signup',
            element:<SignUp></SignUp>
          },
          
          {
            path:'/features',
            element:<Features></Features>       
          },
          
      ]
    },
    
        {
            path:'dashboard',
            element:<Dashboard></Dashboard>,
            children:[
                {
                 path:'myselectclasses',
                 element: <MySelectClasses></MySelectClasses>  
                },
                {
                    path:'myenrolleclasses',
                    element:<MyEnrolleClasses></MyEnrolleClasses>
                },
            {
                path:'addclass',
                element:<AddClass></AddClass>
            },
            {
                path:'myclass',
                element:<MyClasses></MyClasses>
            },
            {
                path:'manageclass',
                element:<ManageClasses></ManageClasses>
            },
            {
                path:'manageUsers',
                element:<ManageUsers></ManageUsers>
            },
            {
              path:'sendfeedback',
              element:<SendFeedBack></SendFeedBack>
            }
            ]
          },
    
  ]);