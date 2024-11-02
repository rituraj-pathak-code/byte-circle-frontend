import { useQuery } from "react-query";
import FriendCard from "../components/FriendCard"
import { fetchUserFriends } from "../services/userService";

const MyFriends = () => {
    const { isLoading, isError, data } = useQuery(
        "myFriends",
        fetchUserFriends,
        {
          retry: 3,
          onError: (error) => {
            console.error("Error fetching profile:", error.message);
          },
        }
      );
    
      if (isLoading) {
        return <h1>Loading...</h1>;
      }
  return (
    <div className="m-2">
      <h2 className="mb-4 text-xl font-bold">My Friends</h2>
      <div className="grid grid-cols-3 gap-8">
        {data?.map((item) => (
         <FriendCard data={item} key={item._id}/>
        ))}
      </div>
    </div>
  )
}

export default MyFriends