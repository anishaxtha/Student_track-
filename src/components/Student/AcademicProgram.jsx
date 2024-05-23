import React, { useEffect, useState } from "react";
import { extractIdFromUrl } from "../../../lib";
import { useLocation } from "react-router-dom";
import { academicDetail, affiliationProgram } from "../../services/api";

const AcademicProgram = () => {
  const [academic, setAcademic] = useState(null);
  const [affiliation, setAffiliation] = useState(null);

  const id = extractIdFromUrl(useLocation().pathname);
  console.log("🚀 ~ AcademicProgram ~ id:", id);

  useEffect(() => {
    const fetchAcademic = async () => {
      const academicData = await academicDetail(id);
      console.log("data academic", academicData);
      setAcademic(academicData.data);
    };
    fetchAcademic();
  }, []);

  useEffect(() => {
    const fetchAffiliation = async () => {
      const affiliationData = await affiliationProgram(id);
      console.log("affiliation data", affiliationData);
      setAffiliation(affiliationData.data);
    };
    fetchAffiliation();
  }, []);

  if (!academic) {
    return <div>loading..</div>;
  }

  if (!affiliation) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <div className="flex items-center justify-center gap-64">
        <div className=" border-gray-40 shadow-2xl bg-gray-300 px-7 py-5 rounded-lg mt-28">
          <h1 className="text-xl font-semibold mb-2 text-center">
            Academic Program
          </h1>
          <div>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Academic Program: &nbsp;
              </span>
              {academic.name}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Academic Program(in short): &nbsp;
              </span>
              {academic.short_name}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Duration: &nbsp;
              </span>
              {academic.duration}
            </p>
          </div>
        </div>

        {/* affiliation program */}

        <div className=" border-gray-40 shadow-2xl bg-gray-300 px-4 py-3 rounded-lg mt-32">
          <h1 className="text-xl font-semibold mb-2 text-center">
            Affiliation Program
          </h1>
          <div className="flex items-center justify-center mb-5">
            <img
              src={affiliation.affiliation_image}
              className="rounded-full  w-28 h-28 cursor-pointer"
              alt="affiliation-img"
            />
          </div>

          <div>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Affiliated Program: &nbsp;
              </span>
              {affiliation.name}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Address: &nbsp;
              </span>
              {affiliation.address}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">Email: &nbsp;</span>
              {affiliation.email}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Website: &nbsp;
              </span>

              <a href={affiliation.website} target="_blank">
                {affiliation.website}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicProgram;
