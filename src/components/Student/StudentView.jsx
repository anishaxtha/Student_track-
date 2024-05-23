import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { extractIdFromUrl } from "../../../lib";
import { singleDetail } from "../../services/api";

const StudentView = () => {
  const [student, setStudent] = useState(null);

  const id = extractIdFromUrl(useLocation().pathname);

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await singleDetail(id);
      console.log("data fetched", data);
      setStudent(data.data);
    };
    fetchDetail();
  }, []);

  if (!student) {
    return <div>loading..</div>;
  }

  const parentsDetail = () => {
    console.log("first");
  };

  return (
    <>
      <div className="mt-5 ">
        <h1 className="text-xl font-semibold text-center underline ">
          Student Profile
        </h1>
        <div className="flex  items-center justify-center gap-56  ">
          <div>
            <img
              className="rounded-full cursor-pointer"
              src={student.student_image}
              alt="student-image "
            />
          </div>
          <div className="flex flex-col  h-[250px] flex-wrap gap-2  mt-10">
            <p className="mb-1">
              <span className="font-semibold text-blue-500">Name: </span>
              {student.student_name_en}
            </p>

            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Date of Enrollment:
              </span>
              {student.student_date_of_enrollment}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Contact Number:
              </span>
              {student.student_contact_number}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">Address: </span>
              {student.student_address}
            </p>

            <p className="mb-1">
              <span className="font-semibold text-blue-500">Ward No: </span>
              {student.student_ward}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">District: </span>
              {student.student_district}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">Gender: </span>
              {student.student_sex}
            </p>

            <p className="mb-1">
              <span className="font-semibold text-blue-500">Email: </span>
              {student.student_email}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">Age: </span>
              {student.student_age}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">Class: </span>
              {student.student_class}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">Ethic: </span>
              {student.student_ethnicity}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Academic Program:
              </span>
              {student.academic_program_id}
            </p>

            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Date of Birth:
              </span>
              {student.student_date_of_birth}
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-20 mt-5">
          <Link to={`/parentsview/${student.parents_id}`}>
            <button className="bg-red-500 px-2 py-1 rounded-lg">
              ParentDetails
            </button>
          </Link>

          <Link to={`/institute/${student.institute_id}`}>
            <button className="bg-yellow-500 px-2 py-1 rounded-lg">
              Institute
            </button>
          </Link>

          <Link to={`/academic/${student.academic_program_id}`}>
            <button className="bg-green-500 px-2 py-1 rounded-lg">
              Academic Program
            </button>
          </Link>
        </div>
      </div>
      {/* <hr className=" h-0.5 bg-gray-500" /> */}
    </>
  );
};

export default StudentView;
