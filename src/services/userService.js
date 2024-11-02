import axios from "axios";
import config from "../config";

const headers = {
  "Content-Type": "application/json",
};

export const fetchUser = async () => {
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
  try {
    const res = await axios.get(
      config.BASE_URL + config.FETCH_FEED,
      { withCredentials: true },
      headers
    );
    if (res.status == 200) {
      return res.data.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const fetchSuggestions = async () => {
  try{
    const res = await axios.get(config.BASE_URL+config.FETCH_SUGGESTED_FRIENDS,{withCredentials:true},headers);
    console.log(res)
    if(res.status==200){
      return res.data.data;
    }
  }catch(err){
    console.log(err);
    throw err;
  }
}

export const fetchUserFriends= async () => {
  try{
    const res = await axios.get(config.BASE_URL+config.FETCH_FRIENDS,{withCredentials:true},headers);
    console.log(res)
    if(res.status==200){
      return res.data.data;
    }
  }catch(err){
    console.log(err);
    throw err;
  }
}
