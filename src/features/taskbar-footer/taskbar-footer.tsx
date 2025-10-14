import Taskbar from "./components/taskbar";

const TaskbarFooter = () => {
  return (
    <footer>
      <button>Start</button>
      <Taskbar />
      <div>System Tray</div>
    </footer>
  );
};

export default TaskbarFooter;
