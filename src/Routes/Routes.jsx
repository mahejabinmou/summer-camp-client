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

import MyEnrolleClasses from "../pages/Dashboard/MyEnrolleClasses/MyEnrolleClasses";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import SendFeedBack from "../pages/Dashboard/SendFeedBack/SendFeedBack";
import Update from "../pages/Update/Update";
import Classes from "../pages/Shared/Classes/Classes";
import Payment from "../pages/Dashboard/Payment/Payment";
import Instructors from "../pages/Home/Instructors/Instructors";
import AdminRoute from "./AdminRoute";
import MySelectedClass from "../pages/Dashboard/MySelectClasses/MySelectedClass";
import PopularClasses from "../pages/Home/PopularClasses/PopularClasses";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },

      {
        path: '/features',
        element: <Features></Features>
      },
      {
        path: '/allclasses',
        element: <Classes></Classes>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/popularClasses',
        element: <PopularClasses></PopularClasses>
      }
    ]
  },

  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'myselectclasses',
        element: <MySelectedClass></MySelectedClass>
      },
      {
        path: 'enrolledClass',
        element: <MyEnrolleClasses></MyEnrolleClasses>
      },
      // {
      //   path:'paymenthistory',
      //   element:<PaymentHistory></PaymentHistory>
      // },
      {
        path: '/dashboard/feedback/:id',
        element: <SendFeedBack></SendFeedBack>
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>
      },


      {
        path: 'addclass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myclass',
        element: <MyClasses></MyClasses>
      },
      {
        path: 'manageclass',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: 'manageUsers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'update/:id',
        element: <Update></Update>

      },
      {
        path: 'sendfeedback',
        element: <SendFeedBack></SendFeedBack>
      }
    ]
  },

]);