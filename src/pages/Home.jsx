import { useSelector } from "react-redux";
import { fetchUserFeed } from "../services/userService";
import { useQuery } from "react-query";
import CreateAPost from "../components/CreateAPost";
import { useState } from "react";
import moment from "moment";
import { formatPostingDate } from "../utils";

const Home = () => {
  const user = useSelector((state) => state.user);
  const [feed, setFeed] = useState([]);
  const { isLoading, isError, data } = useQuery("feed", fetchUserFeed, {
    retry: 3,
    onSuccess: (data) => {
      if (data.status === 200) {
        setFeed(data?.data?.data);
      }
    },
    onError: (error) => {
      console.error("Error fetching profile:", error.message);
    },
  });

  console.log(feed);
  return (
    <div className="m-2">
      <CreateAPost user={user} />
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="my-6">
          <h2 className="font-semibold text-xl mb-4">Feed</h2>
          {feed.map((item) => (
            <div className="shadow-myshadow p-4 rounded-lg flex gap-4 mb-4" key={item?._id}>
              <div>
                <img
                  src={item?.user?.photoURL}
                  alt=""
                  className="min-w-[50px] w-[50px] rounded-full"
                />
              </div>
              <div>
                  <h3 className="font-semibold">{`${item?.user?.firstName} ${item?.user?.lastName}`}</h3>
                  <p className="text-sm text-gray-500">{formatPostingDate(item?.createdAt)}</p>
                  <div className="mt-4">
                    {" "}
                    <p>{item?.text}</p>
                  </div>
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
