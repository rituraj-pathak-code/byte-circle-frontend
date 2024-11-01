import { useState } from "react";
import { signupRequest } from "../services/authService";
import signupimg from "../assets/signup_img.jpg";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { SignupSchema } from "../validation/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
 
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      console.log(formik);
      try {
        setLoading(true);
        const res = await signupRequest(values);
        if (res.status == 201) {
          toast.success("Account created successfully", {
            toastId: "signup_success_id",
          });
          setLoading(false);
          navigate("/login");
        } else if (res.status == 200) {
          toast.error(res?.data?.message, { toastId: "duplicate_email_id" });
          setLoading(false);
        } else {
          toast.error("Something went wrong. Try again later!", {
            toastId: "signup_failure_id",
          });
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex max-h-[100vh]">
      <img src={signupimg} alt="" className="w-[40vw]" />
      <div className="w-[60vw] flex flex-col gap-8 justify-center items-center">
        <h2 className="text-3xl font-bold">DreamCraft</h2>
        <form
          className="flex flex-col gap-4 w-[60%]"
          onSubmit={formik.handleSubmit}
        >
          <Input
            type="text"
            name="firstName"
            placeholder="Enter Firstname"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="w-full"
            required={true}
            error={formik.touched.firstName && formik.errors.firstName}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Enter Lastname"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="w-full"
            required={true}
            error={formik.touched.lastName && formik.errors.lastName}
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full"
            required={true}
            error={formik.touched.email && formik.errors.email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="w-full"
            required={true}
            error={formik.touched.password && formik.errors.password}
          />
          <div className="m-auto">
            <Button type="submit" className={"w-fit"} disabled={loading}>
              {loading ? "Please wait..." : "Create an Account"}
            </Button>
          </div>
        </form>
        <div className="flex items-center gap-[5px]">
          <p>Already have an account? Please</p>
          <Link to={"/login"} className="underline text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
