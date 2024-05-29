import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { addAffiliation } from "../../services/api";

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

const AddAffiliation = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [affiliation, setAffiliation] = useState({
    name: "",
    logo: [],
    email: "",
    address: "",
    contact: "",
    website: "",
  });

  useEffect(() => {
    console.log("file: ", image);
    console.log("url: ", preview);
  }, [image, preview]);

  const handleAffiliation = (e) => {
    const { name, value } = e.target;
    setAffiliation({
      ...affiliation,
      [name]: value,
    });
  };

  const handleNumberChange = (value) => {
    setAffiliation({
      ...affiliation,
      contact: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setAffiliation({ ...affiliation, logo: file });
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    console.log(
      "🚀 ~ handleImageChange ~ handleImageChange:",
      handleImageChange
    );
  };

  const handleSubmit = async () => {
    const affiliationData = await addAffiliation(affiliation);
    console.log("Affiliation added successfully", affiliationData);
  };

  return (
    <div>
      <h1 className="text-center text-xl font-semibold text-blue-500 mb-5">
        AFFILIATION DETAILS
      </h1>
      <Form
        {...formItemLayout}
        name="register"
        // scrollToFirstError
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input
            style={{ width: "300px" }}
            value={affiliation.name}
            name="name"
            onChange={handleAffiliation}
          />
        </Form.Item>

        <Form.Item
          label="Logo"
          name="logo"
          rules={[
            {
              required: true,
              message: "Please upload a logo!",
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
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input
            style={{ width: "300px" }}
            value={affiliation.email}
            name="email"
            onChange={handleAffiliation}
          />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input
            style={{ width: "300px" }}
            value={affiliation.address}
            name="address"
            onChange={handleAffiliation}
          />
        </Form.Item>
        <Form.Item
          label="Contact"
          name="contact"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <InputNumber
            style={{ width: "200px" }}
            value={affiliation.contact}
            onChange={handleNumberChange}
          />
        </Form.Item>
        <Form.Item
          label="Website"
          name="website"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
            {
              type: "url",
              message: "The input is not valid URL!",
            },
          ]}
        >
          <Input
            placeholder="https://www.example.com"
            style={{ width: "200px" }}
            value={affiliation.website}
            name="website"
            onChange={handleAffiliation}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddAffiliation;
