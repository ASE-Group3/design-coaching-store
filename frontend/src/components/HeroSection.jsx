import HeroImage from "../assets/hero-image.svg";

const HeroSection = () => {
  return (
    <div className="my-20 grid grid-cols-2 items-center">
      <div className="px-10 py-5">
        <p className="font-bold text-4xl">TOP SALE</p>
        <p className="text-orange-500 my-4">Discount 20% for all new users!</p>
        <button className="bg-orange-500 rounded-full p-2 w-60 text-white">
          Discover more
        </button>
      </div>

      <div>
        <img src={HeroImage} alt="hero" className="w-[90%] h-[90%]" />
      </div>
    </div>
  );
};
export default HeroSection;
