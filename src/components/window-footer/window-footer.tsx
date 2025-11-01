import type { ReactNode } from "react";

type WindowFooterProps = {
  children: ReactNode;
};
const WindowFooter = ({ children }: WindowFooterProps) => {
  return <div className="gui-box-inset mb-0.5 mx-0.5">{children}</div>;
};

export default WindowFooter;
