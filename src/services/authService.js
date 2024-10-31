import axios from "axios";
import config from "../config.js";

export const signupRequest = async (data) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const res = await axios.post(config.BASE_URL + config.SIGN_UP, data, headers);
    return res;
  } catch (err) {
    return err.response;
  }
};

export const loginRequest = async (data) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const res = await axios.post(
      config.BASE_URL + config.LOGIN,
      data,
      { withCredentials: true },
      headers
    );

    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};
