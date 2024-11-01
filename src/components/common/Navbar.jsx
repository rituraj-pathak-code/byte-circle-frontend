import { useMutation } from "react-query";
import { logoutRequest } from "../../services/authService";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"


const Navbar = () => {
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: logoutRequest,
    onSuccess: () => {
      toast.success("Logged out successfully!");
      navigate('/login')
    },
    onError: () => {
      toast.error("Error logging out. Please try again.");
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };
 
  return (
    <div>
      <div className="flex justify-between">
        <h2>Byte Circel</h2>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  )
}

export default Navbar