import Button from "./ui/Button"


const FriendCard = ({data}) => {
  return (
    <div key={data._id} className="shadow-myshadow flex flex-col justify-center items-center px-4 py-2 gap-4 rounded-lg">
    <img src={data?.photoURL} alt="" className="w-[80px] rounded-full" />
    <h3 className="font-semibold">{`${data?.firstName} ${data?.lastName}`}</h3>
    <Button>View</Button>
  </div>
  )
}

export default FriendCard