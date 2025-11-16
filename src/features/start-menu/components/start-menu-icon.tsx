import { Link } from "react-router-dom";
import type { AppType } from "../../../data/apps";

type StartMenuIconProps = {
  app: AppType;
  setIsStartMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const StartMenuIcon = ({ app, setIsStartMenuOpen }: StartMenuIconProps) => {
  return (
    <Link
      to={app.link.url}
      className="flex hover:bg-blue-950 hover:text-white p-1"
      target={app.link.type === "external" ? "_blank" : "_self"}
      rel="noopener noreferrer"
      tabIndex={0}
      onClick={() => setIsStartMenuOpen(false)}
    >
      <img
        src={`/icons/${app.icon.src}`}
        width={32}
        height={32}
        alt={app.icon.alt}
        className="mr-2"
      />
      <p>{app.name}</p>
    </Link>
  );
};

export default StartMenuIcon;
