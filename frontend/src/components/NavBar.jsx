import { Search, ShoppingBag, Heart, User } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store";

const NavBar = () => {
  const user = useAuthStore((state) => state.currentUser.details);
  return (
    <div className="hidden px-10 py-5 md:flex items-center justify-between">
      <img src={Logo} alt="logo" className="w-12 h-12 rounded-full" />

      <div className="flex my-5">
        <nav className="flex w-[100%] font-bold items-center justify-center gap-x-10 pl-16">
          <Link
            to="/"
            className="hover:border-b-4 border-orange-500 transition-all"
          >
            HOME
          </Link>
          <Link
            to="/"
            className="hover:border-b-4 border-orange-500 transition-all"
          >
            ABOUT
          </Link>
          <Link
            to="/"
            className="hover:border-b-4 border-orange-500 transition-all"
          >
            SHOP
          </Link>
          <Link
            to="/"
            className="hover:border-b-4 border-orange-500 transition-all"
          >
            CONTACT
          </Link>
        </nav>
      </div>

      <div className="flex gap-x-10 items-center justify-center">
        <ShoppingBag color="black" className="w-6 h-6" />
        <Heart color="black" className="w-6 h-6" />
        {user.pic ? (
          <img
            src={user.pic}
            alt="user avatar"
            className="w-6 h-6 rounded-full cursor-pointer"
          />
        ) : (
          <Link to="/login">
            <User color="black" className="w-6 h-6" />
          </Link>
        )}
        <Search color="black" className="w-6 h-6" />
      </div>
    </div>
  );
};
export default NavBar;
