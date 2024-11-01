import axios from "axios";
import config from "../config";

export const createPost = async (data) => {
    console.log(data)
  const headers = {
    "Content-Type": "application/json",
  };
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
    throw err;
  }
};
