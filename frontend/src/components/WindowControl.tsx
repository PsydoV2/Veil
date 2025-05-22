import { useEffect, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import {
  FaWindowMaximize,
  FaWindowMinimize,
  FaWindowRestore,
} from "react-icons/fa6";
import WebShortCuts from "./WebShortCuts";
import "../styles/WindowControl.css";

interface Props {
  openAddWebShortCut: () => void;
}

export default function WindowControls(props: Props) {
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
      <img src="logo.png" alt="Browser Logo" />

      <WebShortCuts
        openAddWebShortCut={props.openAddWebShortCut}
      ></WebShortCuts>

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
