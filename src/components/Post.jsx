import { formatPostingDate } from "../utils";
import { FcComments } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { useQuery } from "react-query";
import { fetchLikes } from "../services/postService";
import PostActions from "./PostActions";

const Post = ({ item }) => {
  const { isLoading, isError, data } = useQuery(
    ["likes", item._id],
    () => fetchLikes(item._id),
    {
      retry: 3,
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.error("Error fetching likes:", error.message);
      },
    }
  );
  return (
    <div className="mb-4 border bg-white rounded-lg">
      <div className="flex gap-4 p-4">
        <div>
          <img
            src={item?.user?.photoURL}
            alt=""
            className="min-w-[50px] w-[50px] rounded-full"
          />
        </div>
        <div>
          <h3 className="font-semibold">{`${item?.user?.firstName} ${item?.user?.lastName}`}</h3>
          <p className="text-sm text-gray-500">
            {formatPostingDate(item?.createdAt)}
          </p>
          <div className="mt-4">
            {" "}
            <p>{item?.text}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[5px] px-4 pb-2">
            <FcLike />
            <p className="text-xs text-gray-500">{data?.count} Likes</p>
          </div>
          <div className="flex items-center gap-[5px] px-4 pb-2">
            <FcComments />
            <p className="text-xs text-gray-500">0 Comments</p>
          </div>
        </div>
      </div>
      <PostActions item={item} likesData={data} isLoading={isLoading} />
    </div>
  );
};

export default Post;
