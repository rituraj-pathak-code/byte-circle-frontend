import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Navbar from "../common/Navbar";
import Chatbot from "../Chatbot";
import { useQuery } from "react-query";
import { fetchUser } from "../../services/userService";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";

const Container = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {isLoading} = useQuery("profile", fetchUser, {
    retry: 3,
    onSuccess: (data) => {
      if (data.status === 200) {
        console.log(data);
        dispatch(setUser(data.data.data));
      } else {
        navigate("/login");
      }
    },
    onError: (error) => {
      console.error("Error fetching profile:", error.message);
      navigate("/login");
    },
  });
  if(isLoading){
    return <p>Loading...</p>
  }
  return (
    <div className="flex overflow-y-hidden">
      <div className="w-[18%] bg-gray-200 p-4 border-r border-gray-300 shadow">
        <Sidebar />
      </div>

      <div className="flex-1">
        <div className="bg-gray-200 p-4 border-b border-gray-300 shadow-sm">
          <Navbar />
        </div>
        <div className="flex-1 flex p-8 bg-gray-50">
          <div className="flex-1 h-[84vh] overflow-y-auto">
            <Outlet />
          </div>
          <div className="ml-8">
            <Chatbot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
