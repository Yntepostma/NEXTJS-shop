import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  type: "button" | "submit" | undefined | "reset";
}

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  return (
    <button
      className="px-4 py-2 my-2 text-gray-200 bg-green-800 rounded hover:bg-green-700"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
