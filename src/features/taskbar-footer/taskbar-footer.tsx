import SystemTray from "./components/system-tray";
import Taskbar from "./components/taskbar/taskbar";

type TaskbarFooterProps = {
  setIsStartMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const TaskbarFooter = ({ setIsStartMenuOpen }: TaskbarFooterProps) => {
  return (
    <footer className="flex h-[6vh] items-center justify-start py-0.5 w-full fixed bottom-0 bg-stone-300 border-t border-t-stone-200 border-b border-b-stone-400 border-l border-l-stone-200 border-r border-r-stone-400">
      <button
        aria-label="Start Menu"
        className="flex justify-center items-center ml-0.5 py-1 px-3 cursor-pointer button-3d"
        onClick={() => setIsStartMenuOpen((prev) => !prev)}
        type="button"
      >
        <img src="./logo/logo.png" alt="Start Menu" className="w-[24px] mr-1" />
        <span>Start</span>
      </button>
      <Taskbar />
      <SystemTray />
    </footer>
  );
};

export default TaskbarFooter;
