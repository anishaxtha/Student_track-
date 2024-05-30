import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { loginData } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    const res = await loginData(values.email, values.password);
    console.log("Login successful", res);
    if (res.status) {
      console.log("redirecting..................");
      navigate("/");
    }
  };

  return (
    <div className="login-class w-full flex items-center flex-col bg-white mt-24">
      <Form
        name="normal_login"
        style={{
          padding: "30px 30px 10px 30px",
          border: "1.5px solid lightblue",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
        className="bg-white rounded-md"
        initialValues={{
          remember: true,
        }}
        onFinish={handleLogin}
      >
        <h1 className="text-3xl font-semibold text-[#171b5b] text-center mb-5">
          Login Form
        </h1>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email Address"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <div className="flex justify-between text-xs mb-5">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a href="">
            <span className="underline text-blue-600 text-xs">
              Forgot password?
            </span>
          </a>
        </div>

        <Form.Item className="flex items-center justify-center ">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button text-center px-24 h-10"
          >
            Login
          </Button>

          <div className="flex justify-center text-xs mt-2">
            <p>No account yet?</p>
            <a href="/signup" className="underline text-blue-500">
              SignUp
            </a>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
