import * as icons from "lucide-react";

const Icon = ({ name, color, size }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

const Input = ({ iconName, type, placeholder, onChange, minLength }) => {
  return (
    <div className="flex gap-5 border border-gray-500 w-96 mx-auto h-12 rounded-md items-center bg-white p-6">
      <Icon name={iconName} color="black" size={20} />
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="outline-none w-[100%]"
        minLength={minLength}
      />
    </div>
  );
};
export default Input;
