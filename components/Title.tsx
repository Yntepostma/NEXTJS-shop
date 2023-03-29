import { PropsWithChildren } from "react";

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="pb-4 text-2xl">{children}</h1>;
};

export default Title;
