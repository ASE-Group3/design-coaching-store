import WhyUsImage from "../assets/why-us.svg";

const WhyUs = () => {
  return (
    <div className="my-10 flex items-center justify-center gap-x-20">
      <div>
        <p className="font-bold text-4xl text-orange-500">Why Choose Us?</p>
        <p className="my-4 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor,
          iaculis congue orci sagittis, id tristique. Ultrices faucibus diam
          consectetur in phasellus eget mauris sem sit. Ac commodo vitae metus,
          bibendum. Amet, enim, vel mi a vitae fermentum, eget posuere aliquam.
          Fermentum feugiat duis molestie pellentesque diam. Molestie in egestas
          viverra nec, sagittis imperdiet. Dignissim ultrices lobortis elit
          ornare laoreet varius faucibus dignissim elementum. Felis, at
          parturient erat cursus egestas suscipit hendrerit integer.
        </p>
        <button className="bg-orange-500 rounded-md p-2 w-60 text-white">
          Order Now
        </button>
      </div>

      <div>
        <img
          src={WhyUsImage}
          alt="hero"
          className="rounded-xl w-[500px] h-[100%]"
        />
      </div>
    </div>
  );
};

export default WhyUs;
