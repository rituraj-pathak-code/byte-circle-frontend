import { useMutation } from "react-query";
import Button from "./ui/Button";
import { acceptFriendRequest, cancelFriendship } from "../services/friendsService";
import { toast } from "react-toastify";

const RequestCard = ({ data }) => {
  const mutation = useMutation((id) => acceptFriendRequest(id), {
    onSuccess: () => {
      toast.success("Friend Request accepted.");
    },
    onError: (error) => {
      console.error("Error sending friend request", error);
    },
  });
  const mutationDelete = useMutation((id) => cancelFriendship(id), {
    onSuccess: () => {
      toast.success("Friend Request rejected.");
    },
    onError: (error) => {
      console.error("Error rejecting friend request", error);
    },
  });
  const handleReject = () => {
    mutationDelete.mutate(data?._id)
  }
  const handleAccept = () => {
    mutation.mutate(data?._id);
  };
  return (
    <div
      key={data._id}
      className="shadow-myshadow flex flex-col justify-center items-center px-4 py-2 gap-4 rounded-lg"
    >
      <img src={data?.photoURL} alt="" className="w-[80px] rounded-full" />
      <h3 className="font-semibold">{`${data?.firstName} ${data?.lastName}`}</h3>
      <div className="flex justify-between w-full">
        <Button disabled={mutationDelete.isSuccess} onClick={handleReject}>{mutationDelete.isLoading ? "Rejecting..." : mutationDelete.isSuccess ? "Rejected" : "Reject"}</Button>
        <Button disabled={mutation.isSuccess} onClick={handleAccept}>
          {mutation.isLoading
            ? "Accepting..."
            : mutation.isSuccess
            ? "Accepted"
            : "Accept"}
        </Button>
      </div>
    </div>
  );
};

export default RequestCard;
