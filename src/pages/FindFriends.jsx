import { useQuery } from "react-query";
import { fetchSuggestions } from "../services/userService";
import Button from "../components/ui/Button";
import ProfileCard from "../components/ProfileCard";

const FindFriends = () => {
  const { isLoading, isError, data } = useQuery(
    "suggestedFriends",
    fetchSuggestions,
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
  console.log(data);

  return (
    <div className="m-2">
      <h2 className="mb-4 text-xl font-bold">Suggested Friends</h2>
      <div className="grid grid-cols-3 gap-8">
        {data?.map((item) => (
         <ProfileCard data={item} key={item._id}/>
        ))}
      </div>
    </div>
  );
};

export default FindFriends;
