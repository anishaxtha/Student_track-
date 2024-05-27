import React from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  TreeSelect,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;
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

const AddInstitute = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values from form: ", values);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold ml-52 mb-5 text-blue-500">
        INSTITUTE DETAILS
      </h1>
      <Form
        {...formItemLayout}
        form={form}
        name="add_institute"
        onFinish={onFinish}
        style={{
          maxWidth: 760,
        }}
      >
        <Form.Item
          label="Institute Name(in english)"
          name="institute_name_en"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Institute Name(in nepali)"
          name="institute_name_np"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Institute Address"
          name="institute_address"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Institute Type"
          name="institute_type"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            // onChange={onGenderChange}
            allowClear
          >
            <Option value="private">Private</Option>
            <Option value="government">Government</Option>
            <Option value="community">Community</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Institute Ward Number"
          name="institute_ward_number"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Institute Contact Number"
          name="institute_contact_number"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <InputNumber style={{ width: "200px", fontSize: "16px" }} />
        </Form.Item>

        <Form.Item
          label="Institute Email"
          name="institute_email"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Institute Logo"
          name="institute_logo"
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
          label="Institute Website"
          name="institute_website"
          rules={[
            {
              required: true,
              message: "Please input!",
              type: "url",
            },
          ]}
        >
          <Input placeholder="https://www.example.com" />
        </Form.Item>

        <Form.Item
          label="Institute Latitude"
          name="institute_latitude"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Institute Longitute"
          name="institute_longitude"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Focal Person"
          name="focal_person"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Focal Person Position"
          name="focal_person_position"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Focal-Person PhoneNumber"
          name="focal_person_phone_number"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <InputNumber style={{ width: "300px" }} />
        </Form.Item>

        <Form.Item
          label="Institute Establishment Date"
          name="institute_establishment_date"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <DatePicker />
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
  );
};

export default AddInstitute;
