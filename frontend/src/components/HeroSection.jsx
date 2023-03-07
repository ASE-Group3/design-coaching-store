import HeroImage from "../assets/hero-image.svg";

const HeroSection = () => {
  return (
    <div className="my-10 flex items-center justify-center gap-x-20">
      <div>
        <img src={HeroImage} alt="hero" className="rounded-xl" />
      </div>

      <div>
        <p className="font-bold text-4xl text-orange-500">Boost Your Style!</p>
        <p className="my-4 max-w-sm">
          Our cosmetics and fabrics shop offers a wide range of high-quality
          products to cater to all your beauty and textile needs. We provide a
          diverse selection of cosmetics, including skincare, makeup, and
          fragrances, to enhance your natural beauty and help you feel confident
          and glamorous every day. Our fabrics come in a variety of colors,
          patterns, and textures, allowing you to create your unique style and
          express your creativity.
        </p>
        <button className="bg-orange-500 rounded-md p-2 w-60 text-white">
          Discover more
        </button>
      </div>
    </div>
  );
};
export default HeroSection;
