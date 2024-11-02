import axios from "axios"
import config from "../config"

const headers = {
    "Content-Type": "application/json",
  };

export const sendFriendRequest = async (userId) => {
    try{
        const res = await axios.post(config.BASE_URL+config.SEND_FRIEND_REQUEST + `/${userId}`,{}, {withCredentials:true}, headers);
        if(res.status==201){
            return res;
        }
    }catch(err){
        console.log(err);
        throw new Error("Failed to send friend request");
    }
    
}

export const fetchRequestReceived = async () => {
    try{
        const res = await axios.get(config.BASE_URL+config.FETCH_REQUESTS_RECEIVED, {withCredentials:true},headers);
        if(res.status==200){
            return res.data.data;
        }
    }catch(err){
        console.log(err);
        throw new Error("Error fetching requests");
    }
}

export const acceptFriendRequest = async (userId) => {
    try{
        const res = await axios.post(config.BASE_URL+config.ACCEPT_FRIEND_REQUEST + `/${userId}`,{}, {withCredentials:true}, headers);
        if(res.status==200){
            return res;
        }
    }catch(err){
        console.log(err);
        throw new Error("Failed to accept friend request");
    }
    
}
export const cancelFriendship = async (userId) => {
    try{
        const res = await axios.delete(config.BASE_URL+config.CANCEL_FRIENDSHIP + `/${userId}`, {withCredentials:true}, headers);
        if(res.status==200){
            return res;
        }
    }catch(err){
        console.log(err);
        throw new Error("Failed to accept friend request");
    }
    
}