import React from "react";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const onDate = (date, dateString) => {
  console.log(date, dateString);
};

const AddStudent = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle style={{ width: 150 }}>
      <Select
        style={{
          width: 100,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="977">+977</Option>
      </Select>
    </Form.Item>
  );

  const props = {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    listType: "picture",
    beforeUpload(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const img = document.createElement("img");
          img.src = reader.result;
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = "red";
            ctx.textBaseline = "middle";
            ctx.font = "33px Arial";
            ctx.fillText("Ant Design", 20, 20);
            canvas.toBlob((result) => resolve(result));
          };
        };
      });
    },
  };
  return (
    <>
      <h1 className="text-2xl text-center  text-blue-600 font-semibold mt-5">
        STUDENT REGISTRATION FORM
      </h1>
      <div className="flex items-center justify-center mt-5 ">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          className="flex bg-green-500  flex-wrap h-96"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="student_name_en"
            label="Full Name(english)"
            rules={[
              {
                required: true,
                message: "Please input your Full name(english)!",
              },
            ]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            name="student_name_np"
            label="Full Name(Nepali)"
            rules={[
              {
                required: true,
                message: "Please input your Full name(Nepali)!",
              },
            ]}
          >
            <Input placeholder="Enter your full name (nepali)" />
          </Form.Item>

          <Form.Item
            name="student_date_of_enrollment"
            label="Date of Enrollment:"
            rules={[
              {
                required: true,
                message: "Please input your enroll date!",
              },
            ]}
          >
            <DatePicker onChange={onDate} needConfirm style={{ width: 280 }} />
          </Form.Item>

          <Form.Item
            name="student_contact_number"
            label="Contact Number"
            rules={[
              {
                required: true,
                message: "Please confirm your contact number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="student_address"
            label="Address"
            // tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your address!",
                // whitespace: true,
              },
            ]}
          >
            <Input placeholder="Enter your address" />
          </Form.Item>

          <Form.Item
            name="student_ward"
            label="Ward No."
            rules={[
              {
                required: true,
                message: "Please select your ward no.",
              },
            ]}
          >
            <Input placeholder="Enter your wardno." />
          </Form.Item>

          <Form.Item
            name="student_district"
            label="District "
            rules={[
              {
                required: true,
                message: "Please input your district !",
              },
            ]}
          >
            <Input placeholder="Enter your district" />
          </Form.Item>

          <Form.Item
            name="student_sex"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please select gender!",
              },
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="student_email"
            label="Email Address"
            rules={[
              {
                required: true,
                message: "Please input email!",
              },
            ]}
          >
            <Input placeholder="Enter your email address" />
          </Form.Item>

          <Form.Item
            name="student_class"
            label="Class"
            rules={[
              {
                required: true,
                message: "Please input class!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="student_ethnicity"
            label="Ethnicity"
            rules={[
              {
                required: true,
                message: "Please input ethic",
              },
            ]}
          >
            <Input placeholder="your ethnicity" />
          </Form.Item>

          <Form.Item
            name="student_date_of_birth"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please input your DOB!",
              },
            ]}
          >
            <DatePicker onChange={onDate} needConfirm style={{ width: 280 }} />
          </Form.Item>

          <Form.Item
            name="student_image"
            label="Image "
            rules={[
              {
                required: true,
                message: "Please input your DOB!",
              },
            ]}
          >
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddStudent;
