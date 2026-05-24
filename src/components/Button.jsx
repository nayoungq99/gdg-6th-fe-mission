import { twMerge } from "tailwind-merge";

const varientType = {
  primary: "text-blue-400 border-2 border-blue-400 bg-white", // 흰배경, 파란글씨
  secondary: "bg-blue-400 text-white", // 파란배경, 흰글씨
};

const Button = ({ children, varients = "primary", className, ...props }) => {
  return (
    <button
      className={twMerge(
        "p-2 rounded-lg cursor-pointer font-bold",
        varientType[varients],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
