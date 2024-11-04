import axios from "axios";
import config from "../config";

const headers = {
  "Content-Type": "application/json",
};

export const createPost = async (data) => {
  try {
    const res = await axios.post(
      config.BASE_URL + config.CREATE_POST,
      data,
      { withCredentials: true },
      headers
    );
    return res;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const likePost = async (postId) => {
  try {
    const res = await axios.post(
      config.BASE_URL + config.LIKE_POST,
      {postId:postId},
      { withCredentials: true },
      headers
    );
    return res;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
export const fetchLikes = async (postId) => {
  try {
    const res = await axios.get(
      config.BASE_URL + config.LIKE_POST + `/${postId}`,
      { withCredentials: true },
      headers
    );
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
