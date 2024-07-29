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
import AddInstitute from "./components/AddData/AddInstitute.jsx";
import AddParent from "./components/AddData/AddParent.jsx";
import AddStudent from "./components/AddData/AddStudent.jsx";
import AddAffiliation from "./components/AddData/AddAffiliation.jsx";
import AddAcademic from "./components/AddData/AddAcademic.jsx";

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
        children: [
          {
            path: "addaffiliation",
            element: <AddAffiliation />,
          },
          {
            path: "addacademic",
            element: <AddAcademic />,
          },
          {
            path: "addinstitute",
            element: <AddInstitute />,
          },
          {
            path: "addparent",
            element: <AddParent />,
          },
          {
            path: "addstudent",
            element: <AddStudent />,
          },
        ],
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
