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
  const [selectedLogo, setSelectedLogo] = useState({
    logo: null,
    url: "",
  });
  const [affiliation, setAffiliation] = useState({
    name: "",
    logo: selectedLogo.logo,
    email: "",
    address: "",
    contact: "",
    website: "",
  });

  useEffect(() => {
    console.log("file: ", selectedLogo.logo);
    console.log("url: ", selectedLogo.url);
  }, [selectedLogo]);

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

  const handleUploadChange = (e) => {
    const file = e.target.files[0]; // Get the uploaded file

    // Check if a file is selected and if it's an image
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader(); // Create a new file reader

      // Define what happens when file reading is done
      reader.onloadend = (event) => {
        // Set the logo property in the state to the read file data
        setSelectedLogo({
          logo: file,
          url: event.target.result,
        });
      };

      // Start reading the selected file
      reader.readAsDataURL(file);
    } else {
      // If the selected file is not an image, you can show a message or perform other actions
      console.error("Please select a valid image file.");
    }
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
          <input
            name="logo"
            type="file"
            accept="image/*"
            onChange={handleUploadChange}
          />
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
