import { useSelector } from "react-redux";
import Input from "../components/ui/Input";
import { fetchUserFeed } from "../services/userService";
import { useQuery } from "react-query";

const Home = () => {
  const user = useSelector((state) => state.user);

  const { isLoading, isError, data } = useQuery("feed", fetchUserFeed, {
    retry: 3,
    onSuccess: (data) => {
      if (data.status === 200) {
        console.log(data);
      }
    },
    onError: (error) => {
      console.error("Error fetching profile:", error.message);
    },
  });
  return (
    <>
    <div className="border flex items-center gap-4 p-6 rounded-lg">
      <img src={user?.photoURL} alt="" className="w-[50px] rounded-full" />
      <Input
        placeholder={`What's on your mind, ${user.firstName}`}
        className={"w-[50vw]"}
      />
    </div>
    <div>
      {isLoading ? <p>Loading..</p> : <p>Feed</p>}
    </div>
    </>
  );
};

export default Home;
