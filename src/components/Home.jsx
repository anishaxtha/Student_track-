import React from "react";
import student from "../assets/student.png";

const Home = () => {
  return (
    <>
      <div className="mt-2 relative w-full h-full">
        <img
          src={student}
          alt="student"
          className=" w-full h-full opacity-50"
        />

        <div className="absolute inset-0  flex items-center justify-center">
          <h1 className="text-3xl text-center mt-24 font-semibold cursor-pointer">
            Welcome to the Student Tracker
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
