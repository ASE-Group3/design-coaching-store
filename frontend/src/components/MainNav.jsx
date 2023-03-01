import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="flex w-full my-5">
      <nav className="flex w-[100%] font-bold items-center justify-center gap-x-10 pl-16">
        <Link
          to="/"
          className="hover:border-b-4 border-orange-500 transition-all"
        >
          HOME
        </Link>
        <Link
          to="/products"
          className="hover:border-b-4 border-orange-500 transition-all"
        >
          PRODUCTS
        </Link>
        <div
          className="hover:border-b-4 hover:cursor-pointer border-orange-500 transition-all"
          onClick={() =>
            document
              .getElementById("about-us")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          ABOUT US
        </div>
        <div
          className="hover:border-b-4 hover:cursor-pointer border-orange-500 transition-all"
          onClick={() =>
            document
              .getElementById("contact-us")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          CONTACT US
        </div>
      </nav>
    </div>
  );
};
export default MainNav;
