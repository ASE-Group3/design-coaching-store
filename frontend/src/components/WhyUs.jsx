import WhyUsImage from "../assets/why-us.svg";
import { useAuthStore } from "../store";

const WhyUs = () => {
  return (
    <div className="grid grid-cols-1 max-sm:p-4 px-10 py-5 p my-10 lg:flex md:items-center md:justify-center gap-x-20">
      <img
        src={WhyUsImage}
        alt="why us image"
        className="rounded-md max-sm:mb-5 w-[100%] md:w-[40%]"
      />

      <div>
        <p className="font-bold text-3xl md:text-4xl text-orange-500 md:mt-2">
          Why Choose Us?
        </p>

        <p className="my-4 max-w-sm md:max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor,
          iaculis congue orci sagittis, id tristique. Ultrices faucibus diam
          consectetur in phasellus eget mauris sem sit. Ac commodo vitae metus,
          bibendum. Amet, enim, vel mi a vitae fermentum, eget posuere aliquam.
          Fermentum feugiat duis molestie pellentesque diam. Molestie in egestas
          viverra nec, sagittis imperdiet. Dignissim ultrices lobortis elit
          ornare laoreet varius faucibus dignissim elementum. Felis, at
          parturient erat cursus egestas suscipit hendrerit integer.
        </p>
        <button className="bg-orange-500 rounded-md p-2 w-[100%] md:w-80 text-white">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default WhyUs;
