import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Lock, Mail, Loader2 } from "lucide-react";
import { API_URL } from "../hooks/config";
import API from "../hooks/useAPI";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, { data, loading }] = API(
    { path: "/users/login", method: "POST" },
    {
      onCompleted: async (d) => {
        console.log(d.data);
        console.log("SUCCESSFUL");

        //TODO: save user metadata to relevant state manager & add a toast
      },
      onError: (e) => {
        console.log(e.message);
      },
    }
  );

  useEffect(() => {
    if (data) {
      navigate("/");
    }
    return;
  }, [data]);

  return (
    <div className="main-background flex flex-col gap-5 w-screen h-screen items-center justify-center">
      <p className="text-orange-500 text-4xl font-bold">LOGIN</p>

      <div className="flex flex-col gap-5">
        <div className="flex gap-5 border w-[100%] mx-auto md:w-80 h-12 rounded-md items-center bg-white p-6">
          <Mail color="black" size={20} />
          <input
            type="text"
            placeholder="Enter your email here"
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none w-[100%]"
          />
        </div>
        <div className="flex gap-5 border w-[100%] mx-auto md:w-80 h-12 rounded-md items-center bg-white p-6">
          <Lock color="black" size={20} />
          <input
            type="password"
            placeholder="Enter your password here"
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none w-[100%]"
          />
        </div>
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
    </div>
  );
};
export default LoginPage;
