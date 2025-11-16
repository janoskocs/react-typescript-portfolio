import { Link } from "react-router-dom";
import type { AppType } from "../../../data/apps";

type DesktopIconProps = {
  icon: AppType;
};

const DesktopIcon = ({ icon }: DesktopIconProps) => {
  return (
    <Link
      to={icon.link.url}
      key={icon.id}
      target={icon.link.type === "external" ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center text-center"
    >
      <img
        src={`/icons/${icon.icon.src}`}
        alt={icon.icon.alt}
        className="w-12 h-12"
      />
      <span className="text-sm mt-1 p-0.5 text-white text-shadow-3d group-hover:bg-blue-950">
        {icon.name.length > 21 ? icon.name.slice(0, 20) + "..." : icon.name}
      </span>
    </Link>
  );
};

export default DesktopIcon;
