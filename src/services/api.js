import axiosInstance from "../../axiosInstance";
import Cookies from "js-cookie";

const token = Cookies.get("token") ? Cookies.get("token") : null;

export const studentData = async () => {
  const res = await axiosInstance.get("api/emis/student/index", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("find the data", res);
  return res.data;
};

export const loginData = async (email, password) => {
  try {
    const loginpage = await axiosInstance.post("/loginapi/login", {
      email: email,
      password: password,
    });
    console.log("login page data ", loginpage);
    const cookie = loginpage.data.data.token;

    Cookies.set("token", cookie, { expires: 7 });

    return loginpage.data;
  } catch (error) {
    console.error("error occurred ", error);
    throw error;
  }
};

export const singleDetail = async (id) => {
  const response = await axiosInstance.get("/api/emis/student/show/1", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("detail value", response);
  return response.data;
};
