import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Mail, Loader2 } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="main-background flex flex-col gap-5 w-screen h-screen items-center justify-center">
      <p className="text-orange-500 text-4xl font-bold">LOGIN</p>

      <div className="flex flex-col gap-5">
        <div className="flex gap-5 border w-80 h-12 rounded-md items-center bg-white p-2">
          <Mail color="black" size={20} />
          <input
            type="text"
            placeholder="Enter your email here"
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none w-[100%]"
          />
        </div>
        <div className="flex gap-5 border w-80 h-12 rounded-md items-center bg-white p-2">
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

      <button className="bg-orange-500 rounded-md p-2 w-60 mt-10 text-white">
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
