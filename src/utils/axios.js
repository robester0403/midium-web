import axios from "axios";

const baseURL = "http://127.0.0.1:5000/api/";

const api = axios.create({
  baseURL: baseURL,
});

export const createArticle = async (data) => {
  const res = await api.post("blogpost", data);
  return res;
};

export const fetchArticles = async () => {
  const res = await api.get("blogpost");
  return res.data;
};
export const fetchArticle = async (id) => {
  const res = await api.get(`blogpost/${id}`);
  return res.data;
};

export const deleteArticle = async (id) => {
  await api.delete(`blogpost/${id}`);
  return;
};

export const generateAiText = async (data) => {
  const res = await api.post("aitextgenerate", data);
  return res.data.choices[0].text;
};
