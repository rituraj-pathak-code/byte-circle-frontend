import axios from "axios";
import config from "../config";

export const fetchUser = async () => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const res = await axios.get(
      config.BASE_URL + config.FETCH_USER,
      {
        withCredentials: true,
      },
      headers
    );
    if (res.status == 200) {
      return res;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const fetchUserFeed = async () => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const res = await axios.get(
      config.BASE_URL + config.FETCH_FEED,
      { withCredentials: true },
      headers
    );
    if (res.status == 200) {
      return res;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
