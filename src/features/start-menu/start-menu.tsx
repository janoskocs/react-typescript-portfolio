import apps from "../../data/apps";
import clsx from "clsx";
import StartMenuIcon from "./components/start-menu-icon";
type StartMenuProps = {
  isStartMenuOpen: boolean;
  setIsStartMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const StartMenu = ({ isStartMenuOpen, setIsStartMenuOpen }: StartMenuProps) => {
  const startMenuClassNames = clsx(
    "flex absolute bottom-10 left-[1px] border-1 p-[1px] bg-stone-300 border-b-black border-r-black border-l-white border-t-white gui-box-inset",
    { hidden: !isStartMenuOpen }
  );
  return (
    <nav className={startMenuClassNames} aria-label="Start Menu navigation">
      <aside className="flex items-center flex-col-reverse gradient-vertical">
        <img
          src="/logo/logo.png"
          width={32}
          height={32}
          alt="Microchip"
          className="m-1"
        />
        <h2 className="vertical-lr rotate-180 text-white pb-2">
          János Kócs | Portfolio
        </h2>
      </aside>
      <ul className="p-[1px]">
        {apps &&
          apps.map((app) => (
            <li key={app.id} className="mb-[2px] last-of-type:mb-0">
              <StartMenuIcon
                app={app}
                setIsStartMenuOpen={setIsStartMenuOpen}
              />
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default StartMenu;
