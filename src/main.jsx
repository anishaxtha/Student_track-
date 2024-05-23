import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import "./index.css";
import Table from "./components/Tabledata.jsx";
import Login from "./pages/Login.jsx";
import Create from "./components/Create.jsx";
import StudentView from "./components/Student/StudentView.jsx";
import ParentDetail from "./components/Student/ParentDetail.jsx";
import Institute from "./components/Student/Institute.jsx";
import AcademicProgram from "./components/Student/AcademicProgram.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/table",
        element: <Table />,
      },
      {
        path: "/create",
        element: <Create />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/view/:id",
    element: <StudentView />,
  },
  {
    path: "/parentsview/:id",
    element: <ParentDetail />,
  },
  {
    path: "/institute/:id",
    element: <Institute />,
  },
  {
    path: "/academic/:id",
    element: <AcademicProgram />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
