import { PropsWithChildren } from "react";

interface FieldProps extends PropsWithChildren {
  label: string;
}

const Field: React.FC<FieldProps> = ({ label, children }) => {
  return (
    <label className="block my-4">
      <span className="block text-sm text-gray-700">{label}</span>
      {children}
    </label>
  );
};

export default Field;
