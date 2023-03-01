import * as icons from "lucide-react";

const socialMediaData = [
  {
    id: 1,
    iconName: "Instagram",
    iconTitle: "Instagram",
  },
  {
    id: 2,
    iconName: "Facebook",
    iconTitle: "Facebook",
  },
  {
    id: 3,
    iconName: "Phone",
    iconTitle: "Phone",
  },
  {
    id: 4,
    iconName: "Mail",
    iconTitle: "Mail",
  },
];

const Icon = ({ name, color, size }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

const SocialMediaList = ({ iconName, iconTitle }) => {
  return (
    <div className="p-4 my-4 flex items-center justify-start bg-orange-500 w-80 rounded hover:translate-x-2 hover:-translate-y-2 transition-all">
      <Icon
        name={iconName}
        color="white"
        size={30}
        className="w-12 h-12 fill-current"
      />
      <div>
        <h3 className="font-bold ml-5 text-white">{iconTitle}</h3>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="mt-32 px-10 py-5 flex flex-col items-center"
    >
      <p className="mb-10 uppercase text-orange-500 w-fit font-extrabold text-2xl">
        CONTACT US
      </p>

      <div className="flex gap-5">
        {socialMediaData.map((data) => (
          <SocialMediaList key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};
export default ContactUs;
