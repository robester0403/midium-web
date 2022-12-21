import axios from "axios";

export const createPost = async (data) => {
  const response = await axios.post("http://127.0.0.1:5000/api/blogpost", data);
  return response;
};

export const generateAiText = async (data) => {
  const res = await axios.post(
    "http://127.0.0.1:5000/api/aitextgenerate",
    data
  );
  return res.data.choices[0].text;
};

export const deleteArticle = async (id) => {
  await axios.delete(`http://127.0.0.1:5000/api/blogpost/${id}`);
  return;
};
