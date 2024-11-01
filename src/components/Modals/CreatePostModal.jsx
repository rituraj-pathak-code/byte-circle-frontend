import ModalCustom from "../ui/ModalCustom";
import Button from "../ui/Button";
import { useMutation } from "react-query";
import { useState } from "react";
import { createPost } from "../../services/postService";
import {toast} from "react-toastify";

const CreatePostModal = ({ open, handleClose, user }) => {
  const [data, setData] = useState({text:""});
  const mutation = useMutation({
    mutationFn: (data) => createPost(data),
    onError: (error) => {
      toast.error("Something went wrong. Try again later.");
      console.error("Error posting:", error.message);
      handleClose();
    },
    onSuccess: () => {
      toast.success("Post created successfully!");
      handleClose();
    },
  });
  const changeHandler = (e) => {
    setData((prev)=> ({
        ...prev,
        text: e.target.value
    }))
  }
  const handleSubmit = () => {
    if(data.text==""){
        return toast.error("You cannot post an empty post.");
    }
    mutation.mutate(data);
  };
  return (
    <ModalCustom open={open} handleClose={handleClose} size="small">
      <div className="text-center py-[12px] px-4 border-b">Create a Post</div>
      <div>
        <div className="flex items-center gap-4 p-6 rounded-lg px-4 py-[12px]">
          <img src={user?.photoURL} alt="" className="w-[50px] rounded-full" />
          <div>
            <h3 className="font-bold">{`${user?.firstName} ${user?.lastName}`}</h3>
            <p className="text-sm text-gray-500">To friends</p>
          </div>
        </div>
        <div className="px-4 py-[12px]">
          <textarea
            className="w-full border focus:outline-none rounded h-[120px] p-2"
            placeholder="Share your thoughts"
            value={data.text}
            onChange={changeHandler}
          />
        </div>
        <div className="px-4 pb-2">
          <Button className={"w-full"} onClick={handleSubmit}>
            {mutation.isLoading ? "Posting..." : "Post"}
          </Button>
        </div>
      </div>
    </ModalCustom>
  );
};

export default CreatePostModal;
