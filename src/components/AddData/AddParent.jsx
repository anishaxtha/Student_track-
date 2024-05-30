import { Button, Form, Input, InputNumber, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import { addParent, listInstitute } from "../../services/api";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const AddParent = () => {
  const [form] = Form.useForm();

  const [fatherPreview, setFatherPreview] = useState(null);
  const [motherPreview, setMotherPreview] = useState(null);
  const [institutes, setInstitutes] = useState([]);

  const handleImageChange = (setPreview, field) => (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        form.setFieldsValue({ [field]: file });
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
      const parentData = await addParent(formData);
      console.log("🚀 ~ handleSubmit ~ parentData:", parentData);
      message.success("Parent data added successfully");
    } catch (error) {
      console.log("Error in parent", error);
      message.error("Failed to add the parent value");
    }
  };

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

  return (
    <>
      <div>
        <h1 className="text-xl ml-52 mb-5 font-semibold text-blue-500">
          PARENT DETAILS
        </h1>
        <Form
          {...formItemLayout}
          form={form}
          onFinish={handleSubmit}
          style={{ maxWidth: 750 }}
        >
          <Form.Item
            label="Institute Name"
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
            label="Father Name"
            name="father_name_en"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item
            label="Father Citizenship Number"
            name="father_citizenship_number"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "250px" }} />
          </Form.Item>
          <Form.Item
            label="Father Contact Number"
            name="father_contact_number"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "250px" }} />
          </Form.Item>
          <Form.Item
            label="Father Annual Income"
            name="father_annual_income"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "200px" }} />
          </Form.Item>
          <Form.Item
            label="Father Occupation"
            name="father_occupation"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item
            label="Father Age"
            name="father_age"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "200px" }} />
          </Form.Item>
          <Form.Item
            label="Father Photo"
            name="father_photo"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <input
              type="file"
              onChange={handleImageChange(setFatherPreview, "father_photo")}
            />
            {fatherPreview && (
              <img
                src={fatherPreview}
                alt="Father Preview"
                style={{ width: "200px", height: "auto" }}
              />
            )}
          </Form.Item>

          <Form.Item
            label="Mother Name"
            name="mother_name_en"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item
            label="Mother Citizenship Number"
            name="mother_citizenship_number"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "250px" }} />
          </Form.Item>
          <Form.Item
            label="Mother Contact Number"
            name="mother_contact_number"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "250px" }} />
          </Form.Item>
          <Form.Item
            label="Mother Annual Income"
            name="mother_annual_income"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "200px" }} />
          </Form.Item>
          <Form.Item
            label="Mother Occupation"
            name="mother_occupation"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item
            label="Mother Age"
            name="mother_age"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "200px" }} />
          </Form.Item>
          <Form.Item
            label="Mother Photo"
            name="mother_photo"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <input
              type="file"
              onChange={handleImageChange(setMotherPreview, "mother_photo")}
            />
            {motherPreview && (
              <img
                src={motherPreview}
                alt="Mother Preview"
                style={{ width: "200px", height: "auto" }}
              />
            )}
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item
            label="Ward No."
            name="ward"
            rules={[{ required: true, message: "Please input!" }]}
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
