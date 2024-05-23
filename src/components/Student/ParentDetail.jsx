import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { extractIdFromUrl } from "../../../lib";
import { parentIndividual } from "../../services/api";

const ParentDetail = () => {
  const [parent, setParent] = useState(null);

  const id = extractIdFromUrl(useLocation().pathname);
  console.log("🚀 ~ ParentDetail ~ id:", id);

  useEffect(() => {
    const fetchParents = async () => {
      const data = await parentIndividual(id);
      console.log("parent fetched", data);
      setParent(data.data);
    };
    fetchParents();
  }, []);

  if (!parent) {
    return <div>loading..</div>;
  }

  return (
    <>
      <div className="flex flex-col w-full items-center justify-center  border-gray-40 shadow-2xl px-7 py-5 rounded-lg">
        <h1 className="text-center text-xl font-semibold mt-5 underline">
          Parent Details
        </h1>
        <div className="flex items-center justify-center gap-44 mt-10  border-gray-500 shadow-xl w-fit px-3 py-2">
          <div>
            <div className="mb-2">
              <img
                className="rounded-full cursor-pointer"
                src={parent.father_image}
                alt="father-image"
              />
            </div>
            <div>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">
                  Father Name:
                </span>
                {parent.father_name_en}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">Father Age:</span>
                {parent.father_age}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">
                  Citizenship No.:
                </span>
                {parent.father_citizenship_number}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">
                  Father contact No.:
                </span>
                {parent.father_contact_number}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">Email.: </span>
                {parent.father_email}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">Address: </span>
                {parent.address}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">
                  Annual Income:
                </span>
                {parent.father_annual_income}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">
                  Occupation:{" "}
                </span>
                {parent.father_occupation}
              </p>
            </div>
          </div>

          <div>
            <div className="mb-2">
              <img
                className="rounded-full cursor-pointer"
                src={parent.mother_image}
                alt="mother-image"
              />
            </div>
            <div>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">
                  Mother Name:
                </span>
                {parent.mother_name_en}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">Mother Age:</span>
                {parent.mother_age}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">
                  Citizenship No.:
                </span>
                {parent.mother_citizenship_number}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">
                  Mother contact No.:
                </span>
                {parent.mother_contact_number}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">Email.:</span>
                {parent.mother_email}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">Address:</span>
                {parent.address}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">Ward No.:</span>
                {parent.ward}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-500">Occupation:</span>
                {parent.mother_occupation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentDetail;
