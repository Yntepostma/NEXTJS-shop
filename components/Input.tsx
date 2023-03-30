import { ChangeEventHandler } from "react";

type InputProps = {
  type: string;
  value: string;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input = ({ type, value, required, onChange }: InputProps) => {
  return (
    <input
      className="px-3 py-1 border rounded w-80"
      type={type}
      value={value}
      required={required}
      onChange={onChange}
    />
  );
};

export default Input;
