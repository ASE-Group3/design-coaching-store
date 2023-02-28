const MainNav = () => {
  return (
    <div className="flex w-full my-5">
      <nav className="flex w-[100%] font-bold items-center justify-center gap-x-10 pl-16">
        <a
          href="http://"
          className="hover:border-b-4 border-orange-500 transition-all"
        >
          HOME
        </a>
        <a
          href="http://"
          className="hover:border-b-4 border-orange-500 transition-all"
        >
          PRODUCTS
        </a>
        <a
          href="http://"
          className="hover:border-b-4 border-orange-500 transition-all"
        >
          ABOUT US
        </a>
        <a
          href="http://"
          className="hover:border-b-4 border-orange-500 transition-all"
        >
          CONTACT US
        </a>
      </nav>
    </div>
  );
};
export default MainNav;
