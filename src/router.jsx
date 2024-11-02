import { createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Container from "./components/layout/Container";
import FindFriends from "./pages/FindFriends";
import FriendRequests from "./pages/FriendRequests";
import MyFriends from "./pages/MyFriends";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Container />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/find-friends",
          element: <FindFriends />,
        },
        {
          path: "/friend-requests",
          element: <FriendRequests />,
        },
        {
          path: "/my-friends",
          element: <MyFriends />,
        },
      ],
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  export default router