import React, { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from "antd";
import { addInstitute, listAcademic } from "../../services/api";

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

const { Option } = Select;

const AddInstitute = () => {
  const [form] = Form.useForm();
  const [preview, setPreview] = useState(null);
  const [academics, setAcademics] = useState([]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        form.setFieldsValue({ institute_logo: file });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }
      const instituteData = await addInstitute(formData);
      console.log("🚀 ~ handleSubmit ~ instituteData:", instituteData);
      message.success("Institute added successfully!");
    } catch (error) {
      console.error("Error adding institute: ", error);
      message.error("Failed to add institute. Please try again.");
    }
  };

  useEffect(() => {
    listAcademic()
      .then((response) => {
        if (Array.isArray(response.data)) {
          setAcademics(response.data);
        } else {
          console.error("API response is not an array", response.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching academic list", err);
      });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-semibold ml-52 mb-5 text-blue-500">
        INSTITUTE DETAILS
      </h1>
      <Form
        {...formItemLayout}
        form={form}
        onFinish={handleSubmit}
        style={{
          maxWidth: 760,
        }}
      >
        <Form.Item
          label="Academic Program"
          name="academic_program_id"
          rules={[{ required: true, message: "Please select an institute!" }]}
        >
          <Select placeholder="Select an parent">
            {academics.map((item) => (
              <Option value={item.id} key={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Institute Name (in English)"
          name="institute_name_en"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input placeholder="Institute Name (in English)" />
        </Form.Item>

        <Form.Item
          label="Institute Name (in Nepali)"
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
              message: "Please select!",
            },
          ]}
        >
          <Select placeholder="Select a type" allowClear>
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
              message: "Please upload!",
            },
          ]}
        >
          <input type="file" onChange={handleImageChange} />
          {preview && (
            <img
              src={preview}
              alt="Image Preview"
              style={{ width: "200px", height: "auto" }}
            />
          )}
        </Form.Item>

        <Form.Item
          label="Institute Website"
          name="institute_website"
          rules={[
            {
              required: true,
              message: "Please input a valid URL!",
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
          label="Institute Longitude"
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
          label="Focal Person Phone Number"
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
