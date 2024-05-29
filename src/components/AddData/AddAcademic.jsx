import React, { useState } from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { addAcademic } from "../../services/api";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const AddAcademic = () => {
  const [academic, setAcademic] = useState({
    name: "",
    duration: "",
    short_name: "",
    affiliation_id: "", // Added affiliation_id to academic state
  });

  const handleAcademic = (name, value) => {
    setAcademic({
      ...academic,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const academicData = await addAcademic(academic);
      console.log("🚀 ~ handleSubmit ~ academicData:", academicData);
    } catch (error) {
      console.error("Error adding academic program:", error);
    }
  };

  // const data = () => {};

  return (
    <div>
      <h1 className="text-center text-xl font-semibold text-blue-500 mb-5">
        ACADEMIC PROGRAM DETAILS
      </h1>
      <Form
        {...formItemLayout}
        name="register"
        scrollToFirstError
        onSubmit={handleSubmit} // Corrected onSubmit prop
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input
            style={{ width: "300px" }}
            value={academic.name}
            onChange={(e) => handleAcademic("name", e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Duration"
          name="duration"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber
            style={{ width: "200px" }}
            value={academic.duration}
            onChange={(value) => handleAcademic("duration", value)}
          />
        </Form.Item>
        <Form.Item
          label="Short Name"
          name="short_name"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input
            style={{ width: "200px" }}
            value={academic.short_name}
            onChange={(e) => handleAcademic("short_name", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Affiliation Id"
          name="affiliation_id"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber
            style={{ width: "200px" }}
            value={academic.affiliation_id}
            onChange={(value) => handleAcademic("affiliation_id", value)}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddAcademic;
