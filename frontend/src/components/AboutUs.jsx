import AboutUsImage from "../assets/about-us.svg";

const AboutUs = () => {
  return (
    <div id="about-us" className="my-32 flex flex-col items-center">
      <p className="mb-10 uppercase text-orange-500 w-fit font-extrabold text-2xl">
        ABOUT US
      </p>

      <div className="grid grid-cols-2 items-center">
        <div className="px-10 py-5">
          <p className="text-orange-500">
            Design coaching store is an online store that deals in fabrics and
            cosmetical stuffs fdjhfshjdshfjbdjfbjdfsbgjfnjdfjdnzsjhzdfjnd
            fdsjhzfdgshgfjdnjsnzgjfhdknkdnjbjjndsjfnd
            dsjaFHDVHfbjbzsjdfjsbgjbrhftjgjhfregthe
            grgfhjgufdhgjfdixjkgfxdhgjhtxjgijkdfjhth
            rehguesrhfguserhgkjefkjtkijrjgktjreisjirjkrji
            etrsuyhtuseruhgturshghjeshjhrjghjhsjdht
            hwegrgejbfdjdjfkdtjfijdtojeyfjgifjttroyosdtjr
            rewhthertigjrreisjfijrgtirhefgjretjeiszjrjtiersh
            therijtihirwhtirjytierigfiuugfgjefheshggfuri
          </p>
        </div>

        <div>
          <img src={AboutUsImage} alt="hero" className="w-[90%] h-[90%]" />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
