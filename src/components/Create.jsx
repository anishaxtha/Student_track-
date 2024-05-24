import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Outlet } from "react-router-dom";

const Create = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setSelectedLink(linkName);
  };

  return (
    <>
      <div className="flex gap-40">
        <div className="flex flex-col items-center h-fit  bg-blue-300 w-32  mt-32 ml-10 rounded-2xl ">
          <div
            className={`px-7 py-4 rounded-2xl ${
              selectedLink === "addaffiliation" ? "active-link" : ""
            }`}
          >
            <Link
              to="addaffiliation"
              onClick={() => handleLinkClick("addaffiliation")}
            >
              <span>Affiliation</span>
            </Link>
          </div>
          <div
            className={`px-6 py-4 rounded-2xl ${
              selectedLink === "addacademic" ? "active-link" : ""
            }`}
          >
            <Link
              to="addacademic"
              onClick={() => handleLinkClick("addacademic")}
            >
              <span>Academic</span>
            </Link>
          </div>
          <div
            className={`px-8 py-4 rounded-2xl ${
              selectedLink === "addinstitute" ? "active-link" : ""
            }`}
          >
            <Link
              to="addinstitute"
              onClick={() => handleLinkClick("addinstitute")}
            >
              <span>Institute</span>
            </Link>
          </div>

          <div
            className={`px-9 py-4 rounded-2xl ${
              selectedLink === "addparent" ? "active-link" : ""
            }`}
          >
            <Link to="addparent" onClick={() => handleLinkClick("addparent")}>
              <span>Parent</span>
            </Link>
          </div>

          <div
            className={`px-8 py-4 rounded-2xl ${
              selectedLink === "addstudent" ? "active-link" : ""
            }`}
          >
            <Link to="addstudent" onClick={() => handleLinkClick("addstudent")}>
              <span>Student</span>
            </Link>
          </div>
        </div>
        <div className="bg-red-500 w-8/12 mt-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Create;
