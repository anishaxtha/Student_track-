import React, { useEffect } from "react";
import { studentData } from "../services/api";

const Home = () => {
  useEffect(() => {
    studentData();
  }, []);

  return (
    <>
      <h1 className="text-xl text-center mt-10">Home Page</h1>
    </>
  );
};

export default Home;
