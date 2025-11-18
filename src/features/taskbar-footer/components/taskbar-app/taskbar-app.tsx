import { Link } from "react-router-dom";
import type { AppType } from "../../../../data/apps";

type TaskbarAppProps = {
  app: AppType & { isFocused?: boolean };
};
const TaskbarApp = ({ app }: TaskbarAppProps) => {
  return (
    <Link
      to={app.link.url}
      target={app.link.type === "external" ? "_blank" : "_self"}
      className={`${
        app.isFocused
          ? "flex items-center ml-0.5 p-1 md:w-1/5 cursor-pointer button-3d-focused"
          : "flex items-center ml-0.5 p-1 md:w-1/5 cursor-pointer button-3d"
      }`}
    >
      <img
        src={`./icons/${app.icon.src}`}
        alt={app.icon.alt}
        className="w-[24px] mr-1"
      />
      <span className="hidden md:inline">{app.name}</span>
    </Link>
  );
};

export default TaskbarApp;
