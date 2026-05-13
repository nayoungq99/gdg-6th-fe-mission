import { twMerge } from "tailwind-merge";

const Input = ({ placeholder, className, type = "text", ...props }) => {
  return (
    <input
      placeholder={placeholder}
      className={twMerge("p-2 rounded-lg border border-gray-400 outline-none focus:border-blue-400", className)}
      type={type}
      {...props}
    />
  );
};

export default Input;