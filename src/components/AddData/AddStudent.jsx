import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Select, message } from "antd";
import {
  addStudent,
  listAcademic,
  listInstitute,
  listParent,
} from "../../services/api";

const { Option } = Select;

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

const AddStudent = () => {
  const [form] = Form.useForm();
  const [preview, setPreview] = useState(null);
  // const [instituteID, setInstituteID] = useState(null);

  const [institutes, setInstitutes] = useState([]);
  const [parents, setParents] = useState([]);
  const [academics, setAcademics] = useState([]);

  useEffect(() => {
    listInstitute()
      .then((res) => {
        if (Array.isArray(res.data)) {
          setInstitutes(res.data);
        } else {
          console.error("API response is not an array", res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching institutes list:", err);
      });
  }, []);

  useEffect(() => {
    listParent()
      .then((response) => {
        if (Array.isArray(response.data)) {
          setParents(response.data);
        } else {
          console.error("API response is not an array", response.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching parents list:", err);
      });
  }, []);

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

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }
      // formData.append("institute_id", instituteID);
      const studentData = await addStudent(formData);
      console.log("🚀 ~ handleSubmit ~ studentData:", studentData);
      message.success("Student added successfully!");
    } catch (error) {
      console.error("Error adding student:", error);
      message.error("Failed to add student. Please try again.");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        form.setFieldsValue({ student_photo: file });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <h1 className="text-2xl text-center text-blue-600 font-semibold mt-5">
        STUDENT REGISTRATION FORM
      </h1>

      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={handleSubmit}
        scrollToFirstError
        style={{ maxWidth: 800 }}
      >
        <Form.Item
          label="Institute"
          name="institute_id"
          rules={[{ required: true, message: "Please select an institute!" }]}
        >
          <Select placeholder="Select an institute">
            {institutes.map((item) => (
              <Option value={item.id} key={item.id}>
                {item.institute_name_en}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Parents Name"
          name="parents_id"
          rules={[{ required: true, message: "Please select an institute!" }]}
        >
          <Select placeholder="Select an parent">
            {parents.map((item) => (
              <Option value={item.id} key={item.id}>
                {item.father_name_en}
              </Option>
            ))}
          </Select>
        </Form.Item>

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
          name="student_name_en"
          label="Full Name (English)"
          rules={[
            {
              required: true,
              message: "Please input your full name (English)!",
            },
          ]}
        >
          <Input placeholder="Enter your full name" />
        </Form.Item>

        <Form.Item
          name="student_name_np"
          label="Full Name (Nepali)"
          rules={[
            {
              required: true,
              message: "Please input your full name (Nepali)!",
            },
          ]}
        >
          <Input placeholder="Enter your full name (Nepali)" />
        </Form.Item>

        <Form.Item
          name="student_date_of_enrollment"
          label="Date of Enrollment"
          rules={[
            { required: true, message: "Please input your enroll date!" },
          ]}
        >
          <DatePicker style={{ width: 280 }} />
        </Form.Item>

        <Form.Item
          name="student_contact_number"
          label="Contact Number"
          rules={[
            { required: true, message: "Please confirm your contact number!" },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="student_age"
          label="Student Age"
          rules={[{ required: true, message: "Please confirm your age!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="student_district"
          label="District"
          rules={[{ required: true, message: "Please input your district!" }]}
        >
          <Input placeholder="Enter your district" />
        </Form.Item>

        <Form.Item
          name="student_sex"
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}
        >
          <Select placeholder="Select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="student_email"
          label="Email Address"
          rules={[{ required: true, message: "Please input email!" }]}
        >
          <Input placeholder="Enter your email address" />
        </Form.Item>

        <Form.Item
          name="student_class"
          label="Student Class"
          rules={[{ required: true, message: "Please input class!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="student_ethnicity"
          label="Religion"
          rules={[{ required: true, message: "Please input your religion!" }]}
        >
          <Input placeholder="Your religion" />
        </Form.Item>

        <Form.Item
          name="student_date_of_birth"
          label="Date of Birth"
          rules={[{ required: true, message: "Please input your DOB!" }]}
        >
          <DatePicker style={{ width: 280 }} />
        </Form.Item>

        <Form.Item
          name="is_active"
          label="Active"
          rules={[{ required: true, message: "Please specify if active!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="student_photo"
          label="Image"
          rules={[{ required: true, message: "Please upload an image!" }]}
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
          name="student_address"
          label="Address"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input placeholder="Enter your address" />
        </Form.Item>

        <Form.Item
          name="student_ward"
          label="Ward No."
          rules={[
            { required: true, message: "Please input your ward number!" },
          ]}
        >
          <Input placeholder="Enter your ward number" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddStudent;
