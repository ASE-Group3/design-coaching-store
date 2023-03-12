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
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");

  const successToast1 = () => {
    toast.success("Account created successfully! Please login 😁", {
      position: toast.POSITION.TOP_RIGHT,
      closeButton: true,
    });
  };
  const successToast2 = () => {
    toast.success("Check your email for a verification link", {
      position: toast.POSITION.TOP_RIGHT,
      closeButton: true,
    });
  };

  const errorToast = () => {
    toast.error("Something went wrong. 🤔", {
      position: toast.POSITION.TOP_RIGHT,
      closeButton: true,
    });
  };

  const [signupUser, { data, loading }] = API(
    { path: "/api/users/createuser", method: "POST" },
    {
      onCompleted: async (d) => {
        successToast2();
        successToast1();
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
        navigate("/login");
      }, 3000);
    }
    return;
  }, [data]);

  return (
    <div className="flex flex-col gap-5 w-screen h-screen items-center justify-center">
      <p className="text-orange-500 text-4xl font-bold">SIGN UP</p>

      <div className="flex flex-col gap-5">
        <Input
          iconName="Mail"
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          iconName="User"
          type="text"
          placeholder="Create a username"
          onChange={(e) => setUsername(e.target.value)}
          minLength={5}
        />
        <Input
          iconName="TextCursor"
          type="text"
          placeholder="Enter your full name"
          onChange={(e) => setFullName(e.target.value)}
          minLength={4}
        />
        <Input
          iconName="FileText"
          type="text"
          placeholder="Add a bio"
          onChange={(e) => setBio(e.target.value)}
        />
        <Input
          iconName="Phone"
          type="text"
          placeholder="Enter your phone number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          iconName="MapPin"
          type="text"
          placeholder="Enter your location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <Input
          iconName="Lock"
          type="password"
          placeholder="Create a password"
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
        />
      </div>

      <button
        className="bg-orange-500 rounded-md p-2 w-60 mt-5 text-white"
        onClick={() => {
          signupUser({
            email,
            username,
            fullname,
            bio,
            phone,
            location,
            password,
          });
        }}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader2 color="white" size={20} className="animate-spin" />{" "}
          </div>
        ) : (
          "Sign up"
        )}
      </button>
      <Link to="/login" className="-mt-2 text-gray-500">
        If you already have an account,{" "}
        <span className="text-orange-500 underline">login now</span>
      </Link>
      <ToastContainer />
    </div>
  );
};
export default LoginPage;
