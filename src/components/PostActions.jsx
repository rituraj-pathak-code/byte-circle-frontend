import React from "react";
import { FcComments, FcLike, FcLikePlaceholder, FcShare } from "react-icons/fc";
import Spinner from "./ui/Spinner";
import { useMutation, useQueryClient } from "react-query";
import { likePost } from "../services/postService";

const PostActions = ({item,likesData, isLoading}) => {
    const queryClient = useQueryClient();
    const mutation = useMutation((postId) => likePost(postId), {
        onSuccess: () => {
          console.log("Post Liked");
          queryClient.invalidateQueries(["likes", item._id]);
        },
        onError: (error) => {
          console.error("Error Liking post", error);
        },
      });
      const likeHandler = (postId) => {
        mutation.mutate(postId);
      };
  return (
    <div className="flex items-center justify-between border-t px-4 h-[45px]">
      <button
        className="flex items-center justify-center gap-2 hover:bg-gray-100 py-2 px-4 h-full w-[100px]"
        onClick={() => likeHandler(item._id)}
      >
        <div>
          {isLoading || mutation.isLoading ? (
            <Spinner width={"20px"} />
          ) : likesData?.liked ? (
            <FcLike size={25} />
          ) : (
            <FcLikePlaceholder size={25} />
          )}
        </div>
        <p className="text-gray-600 text-sm">
          {likesData?.liked ? "Liked" : "Like"}
        </p>
      </button>
      <button className="flex items-center gap-2 hover:bg-gray-100 py-2 px-4">
        <FcComments size={25} />
        <p className="text-gray-600 text-sm">Comment</p>
      </button>
      <button className="flex items-center gap-2 hover:bg-gray-100 py-2 px-4">
        <FcShare size={25} />
        <p className="text-gray-600 text-sm">Share</p>
      </button>
    </div>
  );
};

export default PostActions;
