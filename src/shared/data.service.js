import API from "../api/api";

const getUsers = async function () {
  try {
    const response = await API.get("/users");
    return response.data;
  } catch (error) {
    return null;
  }
};

const getUserById = async function (id) {
  try {
    const response = await API.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

const getQuestions = async function (params) {
  try {
    const response = await API.get("/questions", { params });
    return response.data;
  } catch (error) {
    return null;
  }
};

const getQuestionById = async function (id) {
  try {
    const response = await API.get(`/question/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

const addQuestion = async function (params) {
  try {
    const response = await API.post("/questions", params);
    return response.data;
  } catch (error) {
    return null;
  }
};

const getTags = async function (params) {
  try {
    const response = await API.get("/tags", { params });
    return response.data;
  } catch (error) {
    return null;
  }
};

const getAnswers = async function () {
  try {
    const response = await API.get("/answers");
    return response.data;
  } catch (error) {
    return null;
  }
};

export const dataService = {
  getUsers,
  getUserById,
  getQuestions,
  getQuestionById,
  addQuestion,
  getTags,
  getAnswers
};
