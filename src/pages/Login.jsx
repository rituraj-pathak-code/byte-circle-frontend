import { useState } from "react";
import { loginRequest } from "../services/authService";
import loginimg from "../assets/login_img.jpg";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { LoginSchema } from "../validation/auth";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const res = await loginRequest(values);
      console.log(res);
      if (res.status == 200) {
        toast.success("Logged in successfully", {
          toastId: "login_success_id",
        });
        setLoading(false);
        navigate('/')
      } else if (res.status == 401) {
        toast.error("Invalid Credentials", {
          toastId: "invalid_cred_id",
        });
        setLoading(false);
      } else {
        toast.error("Something went wrong. Try again later!", {
          toastId: "login_failure_id",
        });
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex max-h-[100vh]">
      <img src={loginimg} alt="" className="w-[40vw]" />
      <div className="w-[60vw] flex flex-col gap-8 justify-center items-center">
        <h2 className="text-3xl font-bold">DreamCraft</h2>
        <form
          className="flex flex-col gap-4 w-[60%]"
          onSubmit={formik.handleSubmit}
        >
          <Input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="border"
            required={true}
            error={formik.touched.email && formik.errors.email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="border"
            required={true}
            error={formik.touched.password && formik.errors.password}
          />
          <div className="m-auto">
            <Button type="submit" className={"w-fit"} disabled={loading}>
              {loading ? "Please wait..." : "Login"}
            </Button>
          </div>
        </form>
        <div className="flex items-center gap-[5px]">
          <p>New here?</p>
          <Link to={"/signup"} className="underline text-blue-500">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
