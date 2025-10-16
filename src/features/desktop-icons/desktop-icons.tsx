import apps from "../../data/apps";
import DesktopIcon from "./components/desktop-icon";

const DesktopIcons = () => {
  return (
    <>
      <section>
        <ul className="flex flex-col flex-wrap h-[92vh] ml-2">
          {apps.map((icon) => (
            <li key={icon.id} className="my-4 flex justify-center w-[6rem]">
              <DesktopIcon icon={icon} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default DesktopIcons;
