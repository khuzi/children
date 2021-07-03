import { api, apiGeodecode } from "./baseUrl";
const headers = {
  headers: { secret: "064422b802876605155a4a549b3a6195", user_id: "1" },
};

const login = async (data) => {
  return await api.post("/auth/login", data);
};
const register = async (data) => {
  return await api.post("/auth/register", data);
};
const contacts = async (data) => {
  return await api.post("/contacts", data);
};
const TopBlogs = async () => {
  return await api.get("/blog/most-viewed");
};
const Blogs = async () => {
  return await api.get("/blog");
};
const SingleBlog = async (id) => {
  return await api.get("/blog/" + id);
};
const Terms = async () => {
  return await api.get("/pages/terms-of-use");
};
const Privacy = async () => {
  return await api.get("/pages/privacy-policy");
};
const Cookies = async () => {
  return await api.get("/pages/cookies-policy");
};
const ResetToken = async (data) => {
  return await api.post("/auth/password/email", data);
};
const ResetPassword = async (data) => {
  return await api.post("/auth/password/reset", data);
};
const GetPasswordToken = async (data) => {
  return await api.post("/auth/password/email", data);
};
const updateProfile = async (data, token) => {
  return await api.post("/profile", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const orders = async (token) => {
  return await api.get(
    "/orders",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const changePassword = async (data, token) => {
  return await api.post("/changePassword", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const comment = async (data, id, token) => {
  return await api.post("/blog/" + id + "/comments", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const chatMessaget = async (data, token) => {
  return await api.post("/chatMessage", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const firstApi = async (token) => {
  return await api.get(
    "/children",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const secondApi = async (id, token) => {
  return await api.get(
    "/children/" + id + "/books/reading",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const thirdApi = async (id, token) => {
  return await api.get(
    "/children/" + id + "/books/completed",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const fourthApi = async (id, token) => {
  return await api.get(
    "/children/" + id + "/time",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const fifthApi = async (id, token) => {
  return await api.get(
    "/dictionary/" + id + "/history",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const sixthApi = async (id, token) => {
  return await api.get(
    "/children/" + id + "/books/",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const subcribeEmail = async (email) => {
  const subscribeData = new FormData();
  subscribeData.append("email", email);
  return await api.post(
    "https://production.inspirable.io/api/auth/subscription",
    subscribeData
  );
};

//Category API

export const repository = {
  login,
  register,
  contacts,
  TopBlogs,
  comment,
  Terms,
  Privacy,
  Cookies,
  updateProfile,
  Blogs,
  SingleBlog,
  orders,
  ResetToken,
  ResetPassword,
  changePassword,
  chatMessaget,
  GetPasswordToken,
  firstApi,
  secondApi,
  thirdApi,
  fourthApi,
  fifthApi,
  sixthApi,
  subcribeEmail,
};
