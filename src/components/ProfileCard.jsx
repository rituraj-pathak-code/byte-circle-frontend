import { useMutation } from 'react-query';
import Button from './ui/Button'
import { sendFriendRequest } from '../services/friendsService';
import { toast } from 'react-toastify';

const ProfileCard = ({data}) => {
    const mutation = useMutation((id)=>sendFriendRequest(id), {
        onSuccess: () => {
          toast.success("Friend Request sent successfully")
        },
        onError: (error) => {
          console.error("Error sending friend request", error);
        },
      });
      const handleSubmit = () => {
        mutation.mutate(data?._id);
      };
  return (
    <div key={data._id} className="shadow-myshadow flex flex-col justify-center items-center px-4 py-2 gap-4 rounded-lg">
    <img src={data?.photoURL} alt="" className="w-[80px] rounded-full" />
    <h3 className="font-semibold">{`${data?.firstName} ${data?.lastName}`}</h3>
    <Button disabled={mutation.isSuccess} onClick={handleSubmit}>{mutation.isLoading ? "Adding..." : mutation.isSuccess ? "Added" : "Add Friend"}</Button>
  </div>
  )
}

export default ProfileCard