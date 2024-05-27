import { Form, Input, InputNumber } from "antd";
import React from "react";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const AddAcademic = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-xl font-semibold text-blue-500 mb-5">
          ACADEMIC PORGRAM DETAILS
        </h1>
        <Form {...formItemLayout} name="register" scrollToFirstError>
          <Form.Item
            label="Name"
            name="Name"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item
            label="Duration"
            name="duration"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber style={{ width: "200px" }} />
          </Form.Item>
          <Form.Item
            label="Short Name"
            name="short_name"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input style={{ width: "200px" }} />
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddAcademic;
