import apps from "../../data/apps";
import { Link } from "react-router";

const DesktopIcons = () => {
  return (
    <>
      {apps.map((app) => (
        <Link
          to={app.link.url}
          key={app.id}
          target={app.link.type === "external" ? "_blank" : "_self"}
        >
          <div key={app.id} className="desktop-icon">
            <span>{app.name}</span>
          </div>
        </Link>
      ))}
    </>
  );
};

export default DesktopIcons;
