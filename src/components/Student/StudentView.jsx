import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { extractIdFromUrl } from "../../../lib";
import { singleDetail } from "../../services/api";

const StudentView = () => {
  const [student, setStudent] = useState(null);

  const id = extractIdFromUrl(useLocation().pathname);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await singleDetail(id);
        console.log("data fetched", data);
        console.log("student details", student);
        setStudent(data);
      } catch (error) {
        console.log("error message", error);
      }
    };
    fetchDetail();
  }, [id]);

  return (
    <>
      <div>StudentView {id}</div>
    </>
  );
};

export default StudentView;
