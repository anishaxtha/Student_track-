import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Upload } from "antd";
import React from "react";

const AddParent = () => {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };

  const props = {
    name: "file",
    // action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <div>
        <h1 className="text-xl  ml-52 mb-5 font-semibold text-blue-500">
          PARENT DETAILS
        </h1>
        <Form
          {...formItemLayout}
          style={{
            maxWidth: 750,
          }}
        >
          <Form.Item
            label="Father Name"
            name="father_name_en"
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
            label="Father Citizenship Number"
            name="father_citizenship_number"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber style={{ width: "250px" }} />
          </Form.Item>

          <Form.Item
            label="Father Contact Number"
            name="father_contact_number"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber style={{ width: "250px" }} />
          </Form.Item>

          <Form.Item
            label="Father Annual Income"
            name="father_annual_income"
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
            label="Father Occupation "
            name="father_occupation"
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
            label="Father Age "
            name="father_age"
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
            label="Father Photo "
            name="father_photo"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="Mother Name"
            name="mother_name_en"
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
            label="Mother Citizenship Number"
            name="mother_citizenship_number"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber style={{ width: "250px" }} />
          </Form.Item>

          <Form.Item
            label="Mother Contact Number"
            name="mother_contact_number"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber style={{ width: "250px" }} />
          </Form.Item>

          <Form.Item
            label="Mother Annual Income"
            name="mother_annual_income"
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
            label="Mother Occupation "
            name="mother_occupation"
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
            label="Mother Age "
            name="mother_age"
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
            label="Mother Photo "
            name="mother_photo"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="Address "
            name="address"
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
            label="Ward No. "
            name="ward"
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
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddParent;
