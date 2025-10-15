import { ReactNode } from "react";
import { clsx } from "clsx";

type WindowProps = {
  children: ReactNode;
  isFocused: boolean;
};
const Window = ({ children, isFocused }: WindowProps) => {
  const windowClassNames = clsx(
    "window border-t border-gray-100 border-b-gray-600 p-0.5 px-0.5 py-px flex-col justify-between items-stretch flex-nowrap bg-stone-300 m-2 h-[90vh] xl:w-[50vw] xl:mx-auto",
    isFocused ? "flex" : "hidden"
  );
  return <section className={windowClassNames}>{children}</section>;
};

export default Window;
