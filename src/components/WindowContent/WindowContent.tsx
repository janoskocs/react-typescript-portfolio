import type { ReactNode } from "react";

type WindowContentProps = {
  children: ReactNode;
};
const WindowContent = ({ children }: WindowContentProps) => {
  return <article className="grow">{children}</article>;
};

export default WindowContent;
