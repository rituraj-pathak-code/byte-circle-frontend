import { useQuery } from "react-query";
import { fetchRequestReceived } from "../services/friendsService";
import RequestCard from "../components/RequestCard";

const FriendRequests = () => {
  const { isLoading, isError, data } = useQuery(
    "receivedRequests",
    fetchRequestReceived,
    {
      retry: 3,
      onError: (error) => {
        console.error("Error fetching requests:", error.message);
      },
    }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(data);

  return (
    <div className="m-2">
      <h2 className="mb-4 text-xl font-bold">Friend Requests</h2>
      <div className="grid grid-cols-3 gap-8">
        {data?.map((item) => (
         <RequestCard data={item} key={item._id}/>
        ))}
      </div>
    </div>
  );
};

export default FriendRequests;
