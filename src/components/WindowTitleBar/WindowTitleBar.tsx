import type { ReactNode } from "react";

type WindowTitleBarProps = {
  children: ReactNode;
  icon: string;
};
const WindowTitleBar = ({ children, icon }: WindowTitleBarProps) => {
  const currentApp = icon.split("/");

  return (
    <div className="m-0.5 p-1 flex flex-row items-center justify-between gradient">
      <div className="flex text-white">
        <img src={icon} alt="" width={24} height={24} className="mr-2" />
        {children}
      </div>
      <div className="flex self-end">
        {/* <button
          className="button-3d bg-stone-300 w-8"
          onClick={() =>
            closeApp(currentApp[currentApp.length - 1].slice(0, -4))
          }
        >
          X
        </button> */}
      </div>
    </div>
  );
};

export default WindowTitleBar;
