import { useEffect, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import {
  FaWindowMaximize,
  FaWindowMinimize,
  FaWindowRestore,
} from "react-icons/fa6";
import WebShortCuts from "./WebShortCuts";

export default function WindowControls() {
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    window.electronAPI.onWindowStateChange((state) => {
      setIsMaximized(state === "maximized");
    });
  }, []);

  const handleMinimize = () => window.electronAPI.controlWindow("minimize");
  const handleMaximizeToggle = () =>
    window.electronAPI.controlWindow(isMaximized ? "unmaximize" : "maximize");
  const handleClose = () => window.electronAPI.controlWindow("close");

  return (
    <div className="windowcontrol">
      <div>
        <img src="logo.png" alt="" />
        <h4>VEIL</h4>
      </div>

      <WebShortCuts></WebShortCuts>

      <div>
        <button onClick={handleMinimize}>
          <FaWindowMinimize />
        </button>
        <button onClick={handleMaximizeToggle}>
          {isMaximized ? <FaWindowRestore /> : <FaWindowMaximize />}
        </button>
        <button onClick={handleClose}>
          <FaRegWindowClose />
        </button>
      </div>
    </div>
  );
}
