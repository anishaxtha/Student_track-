import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { studentData } from "../services/api";
import { Link } from "react-router-dom";

const Tabledata = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    studentData()
      .then((res) => {
        console.log("api data", res);
        if (Array.isArray(res.data)) {
          setList(res.data);
        } else {
          console.error("APi  response  is not an array ", res.data);
        }
      })
      .catch((err) => {
        console.log("error list", err);
      });
  }, []);

  const columns = [
    {
      title: "Student Name",
      dataIndex: "student_name_en",
      key: "1",
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: "Phone Number",
      dataIndex: "student_contact_number",
      key: "2",
    },
    {
      title: "Address",
      dataIndex: "student_address",
      key: "3",
    },
    {
      title: "Email",
      dataIndex: "student_email",
      key: "4",
    },
    {
      title: "Action",
      key: "5",
      render: (text, record) => (
        <div className="flex items-center justify-center gap-3">
          <Link to={`/view/${record.id}`}>
            <button className="bg-yellow-500 py-2 px-3 rounded-lg">View</button>
          </Link>
          <button className="bg-blue-500 py-2 px-3 rounded-lg">Edit</button>
          <button className="bg-red-500 py-2 px-3 rounded-lg">Delete</button>
        </div>
      ),
    },
  ];

  return <Table columns={columns} dataSource={list} />;
  // <StudentView />;
};

export default Tabledata;
