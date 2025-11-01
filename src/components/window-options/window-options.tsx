import type { ReactNode } from "react";

type WindowOptionsProps = {
  children: ReactNode;
};
const WindowOptions = ({ children }: WindowOptionsProps) => {
  return <div className="p-1 items-start">{children}</div>;
};

export default WindowOptions;
