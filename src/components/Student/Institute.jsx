import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { extractIdFromUrl } from "../../../lib";
import { instituteIndividual } from "../../services/api";

const Institute = () => {
  const [institute, setInstitude] = useState(null);

  const id = extractIdFromUrl(useLocation().pathname);
  console.log("🚀 ~ Institute ~ id:", id);

  useEffect(() => {
    const fetchInstitute = async () => {
      console.log(id);
      const data = await instituteIndividual(id);
      console.log("institute data", data);
      setInstitude(data.data);
    };
    fetchInstitute();
  }, []);

  if (!institute) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div>
        <h1 className="text-xl text-center  font-semibold underline">
          Institute Details
        </h1>

        <div className="flex items-center justify-center gap-64 mt-10">
          <div>
            <img src={institute.institute_image} alt="institute image" />
          </div>

          <div>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Institute Name(English): &nbsp;
              </span>
              {institute.institute_name_en}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Institute Name(Nepali): &nbsp;
              </span>
              {institute.institute_name_np}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Institute Address: &nbsp;
              </span>
              {institute.institute_address}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Contact No.: &nbsp;
              </span>
              {institute.institute_contact_number}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">Email: &nbsp;</span>
              {institute.institute_email}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Establishment Date: &nbsp;
              </span>
              {institute.institute_establishment_date}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Institute Type: &nbsp;
              </span>
              {institute.institute_type}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Ward No.: &nbsp;
              </span>
              {institute.institute_ward_number}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Institude Website.: &nbsp;
              </span>
              <a href={institute.institute_website} target="_blank">
                {institute.institute_website}
              </a>
            </p>

            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Latitude: &nbsp;
              </span>
              {institute.latitude}
            </p>

            <p className="mb-1">
              <span className="font-semibold text-blue-500">
                Longitude: &nbsp;
              </span>
              {institute.longitude}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Institute;
