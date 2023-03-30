import { PropsWithChildren } from "react";

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="m-2 text-2xl p4">{children}</h1>;
};

export default Title;
