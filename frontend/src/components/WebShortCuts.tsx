import "../styles/WebShortCuts.css";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";

interface Props {
  openAddWebShortCut: () => void;
}

export default function WebShortCuts(props: Props) {
  const [webShortCuts, setWebShortCuts] = useState<WebShortCut[]>([]);

  useEffect(() => {
    const shortcuts = window.electronAPI.getWebShortCuts();
    setWebShortCuts(shortcuts);
  }, []);

  return (
    <div className="webShortCuts">
      {webShortCuts.map((webShortCut) => (
        <a href={webShortCut.url} key={webShortCut.id}>
          <img src={webShortCut.imgUrl} alt="WebIcon" />
        </a>
      ))}

      <button onClick={props.openAddWebShortCut}>
        <FaPlus />
      </button>
    </div>
  );
}
