import { createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Container from "./components/layout/Container";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Container />,
      children: [
        {
          path: "/",
          element: <Home />,
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