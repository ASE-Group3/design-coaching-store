import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail, Loader2 } from "lucide-react";
import API from "../hooks/useAPI";
import { useAuthStore } from "../store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../ui";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const successToast = () => {
    toast.success("Successfully logged in! 😁", {
      position: toast.POSITION.TOP_RIGHT,
      closeButton: true,
    });
  };

  const errorToast = () => {
    toast.error("Incorrect credentials 🤔", {
      position: toast.POSITION.TOP_RIGHT,
      closeButton: true,
    });
  };

  const [loginUser, { data, loading }] = API(
    { path: "/api/users/login", method: "POST" },
    {
      onCompleted: async (d) => {
        //TODO: save user metadata to relevant state manager & add a toast
        successToast();
        useAuthStore.setState({
          currentUser: {
            details: {
              _id: d.data.details._id,
              fullname: d.data.details.fullname,
              username: d.data.details.username,
              email: d.data.details.email,
              location: d.data.details.location,
              phone: d.data.details.phone,
              bio: d.data.details.bio,
              pic: "https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png",
            },
          },
        });
      },
      onError: (e) => {
        errorToast();
        console.log(e.message);
      },
    }
  );

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
    return;
  }, [data]);

  return (
    <div className="flex flex-col gap-5 w-screen h-screen items-center justify-center">
      <p className="text-orange-500 text-4xl font-bold">LOGIN</p>

      <div className="flex flex-col gap-5">
        <Input
          iconName="Mail"
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          iconName="Lock"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/forgotpassword" className="-mt-2 font-bold text-red-500">
          Forgot password?
        </Link>
      </div>

      <button
        className="bg-orange-500 rounded-md p-2 w-60 mt-10 text-white"
        onClick={() => {
          loginUser({
            email,
            password,
          });
        }}
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 color="white" size={20} className="animate-spin" />{" "}
            Loading...
          </div>
        ) : (
          "Login"
        )}
      </button>
      <Link to="/signup" className="-mt-2 text-gray-500">
        If you haven't registered yet,{" "}
        <span className="text-orange-500 underline">register now</span>
      </Link>
      <ToastContainer />
    </div>
  );
};
export default LoginPage;
