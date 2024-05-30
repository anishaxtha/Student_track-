import axiosInstance from "../../axiosInstance";
import Cookies from "js-cookie";

const token = Cookies.get("token") ? Cookies.get("token") : null;

export const studentData = async () => {
  const res = await axiosInstance.get("api/emis/student/index", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const loginData = async (email, password) => {
  try {
    const loginpage = await axiosInstance.post("/loginapi/login", {
      email: email,
      password: password,
    });
    const cookie = loginpage.data.data.token;

    Cookies.set("token", cookie, { expires: 7 });

    return loginpage.data;
  } catch (error) {
    console.error("error occurred ", error);
    throw error;
  }
};

export const singleDetail = async (id) => {
  const response = await axiosInstance.get(`/api/emis/student/show/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const parentIndividual = async (id) => {
  const response = await axiosInstance.get(`/api/emis/parents/show/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("parent value", response);
  return response.data;
};

export const instituteIndividual = async (id) => {
  const res = await axiosInstance.get(`/api/emis/edu-institute/show/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("institute", res);
  return res.data;
};

export const academicDetail = async (id) => {
  const resp = await axiosInstance.get(`api/emis/academic-program/show/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("academic program", resp);
  return resp.data;
};

export const affiliationProgram = async (id) => {
  const res = await axiosInstance.get(`api/emis/affiliation/show/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("affiliation program", res);
  return res.data;
};

export const addAffiliation = async (formData) => {
  const response = await axiosInstance.post(
    "api/emis/affiliation/store",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log("🚀 ~ addAffiliation ~ response:", response);
  return response.data;
};

export const addAcademic = async (academic) => {
  const res = await axiosInstance.post(
    "api/emis/academic-program/store",
    academic,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log("🚀 ~ addAcademic ~ res:", res);
  return res.data;
};

export const addInstitute = async (institute) => {
  const response = await axiosInstance.post(
    "api/emis/edu-institute/store",
    institute,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log("🚀 ~ addInstitute ~ response:", response);
  return response.data;
};

export const addParent = async (formData) => {
  const response = await axiosInstance.post(
    "api/emis/parents/store",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "multipart/form-data",
      },
    }
  );
  console.log("🚀 ~ addParent ~ response:", response);
  return response.data;
};

export const addStudent = async (formData) => {
  const response = await axiosInstance.post(
    "api/emis/student/store",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "multipart/form-data",
      },
    }
  );
  console.log("🚀 ~ addStudent ~ response:", response);
  return response.data;
};

export const listInstitute = async () => {
  const res = await axiosInstance.get("api/emis/edu-institute/index", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const listParent = async () => {
  const response = await axiosInstance.get("api/emis/parents/index", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const listAcademic = async () => {
  const response = await axiosInstance.get("api/emis/academic-program/index", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// export const listAffiliation = async() =>{
//   const response = await axiosInstance.get("")
// }
