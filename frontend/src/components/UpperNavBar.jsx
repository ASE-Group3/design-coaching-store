import { Search, ShoppingBag, Heart, User } from "lucide-react";
import { useState } from "react";

const UpperNavBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="px-10 py-5 flex items-center justify-between">
      <p className="font-bold text-orange-500 text-xl tracking-tighter">
        Design Coaching Store
      </p>

      <div className="flex items-center justify-center rounded-full bg-orange-500 p-1">
        <div className="text-white border-r-2 border-white px-2">
          All Categories
        </div>
        <div className="flex items-center justify-start ml-2">
          <input
            type="text"
            className="bg-orange-500 p-2 text-white w-[70%] placeholder-white outline-none"
            placeholder="Search products..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Search color="white" className="w-5 h-5" />
        </div>
      </div>

      <div className="flex gap-x-10">
        <ShoppingBag color="black" className="w-6 h-6" />
        <Heart color="black" className="w-6 h-6" />
        <User color="black" className="w-6 h-6" />
      </div>
    </div>
  );
};
export default UpperNavBar;
