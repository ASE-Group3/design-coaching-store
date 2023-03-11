import * as icons from "lucide-react";

const featuresData = [
  {
    id: 1,
    label: "Free Shipping",
    body: "Free shipping around the world for all orders above $200",
    icon: "Truck",
  },
  {
    id: 2,
    label: "Safe Payment",
    body: "With our payment gateway, don't worry about the security of your information",
    icon: "Wallet",
  },
  {
    id: 3,
    label: "Friendly Services",
    body: "You have a 30-day guarantee on all your services",
    icon: "Users",
  },
];

export const CustomIcon = ({ name, color, size }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

const Feature = ({ icon, label, body }) => {
  return (
    <div className="grid gap-2 bg-white bg-opacity-40 rounded-md p-5">
      <CustomIcon name={icon} color="black" size={30} />
      <div>
        <p className="text-orange-500 font-bold text-lg">{label}</p>
        <p className="max-w-md mt-2">{body}</p>
      </div>
    </div>
  );
};

const FeaturesList = () => {
  return (
    <div className="grid gap-5 px-10 py-5 my-20 md:flex">
      {featuresData.map((data) => (
        <Feature key={data.id} {...data} />
      ))}
    </div>
  );
};

export default FeaturesList;
