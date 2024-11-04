import { useSelector } from "react-redux";
import { fetchUserFeed } from "../services/userService";
import { useQuery } from "react-query";
import CreateAPost from "../components/CreateAPost";
import { useState } from "react";
import moment from "moment";
import { formatPostingDate } from "../utils";
import Post from "../components/Post";

const Home = () => {
  const user = useSelector((state) => state.user);
  const { isLoading, isError, data } = useQuery("feed", fetchUserFeed, {
    retry: 3,
    onError: (error) => {
      console.error("Error fetching profile:", error.message);
    },
  });

  return (
    <div className="">
      <CreateAPost user={user} />
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="my-6">
          <h2 className="font-semibold text-xl mb-4">Feed</h2>
          {data.map((item) => (
            <Post item={item} key={item?._id}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
