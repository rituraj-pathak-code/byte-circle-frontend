import { useState } from "react";
import CreatePostModal from "./Modals/CreatePostModal"
import Button from "./ui/Button"
import Input from "./ui/Input"

const CreateAPost = ({user}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
    <div className="flex items-center gap-4 p-6 rounded-lg bg-white border">
      <img src={user?.photoURL} alt="" className="w-[50px] rounded-full" />
      <div className="flex-grow">
        <Input
          placeholder={`What's on your mind, ${user?.firstName}?`}
          className="w-full cursor-pointer focus:outline-none"
          readOnly={true}
          onClick={handleOpen}
        />
      </div>
      <div className="mt-2">
        <Button onClick={handleOpen}>Post it</Button>
      </div>
    </div>
    <CreatePostModal open={open} handleClose={handleClose} user={user}/>
  </>
  )
}

export default CreateAPost