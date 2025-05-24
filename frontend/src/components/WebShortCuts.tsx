import { useState } from "react";
import { useAppData } from "../context/AppDataContext";
import "../styles/WebShortCuts.css";
import { FaPencil } from "react-icons/fa6";
import { GrAdd, GrClose } from "react-icons/gr";

export default function WebShortCuts() {
  const { data, updateWebShortCuts } = useAppData();
  const [inEditMode, setEditMode] = useState(false);
  const [newUrl, setNewUrl] = useState<string>("");

  function handelAddWebShortCut() {
    data.webShortCuts.push({
      url: newUrl,
      id: 0,
      imgUrl: `https://www.google.com/s2/favicons?sz=64&domain_url=${newUrl}`,
    });

    updateWebShortCuts(data.webShortCuts);

    setEditMode(false);
  }

  return (
    <div className="webShortCuts">
      {/* DEFAULTS */}
      <a href="https://www.youtube.com/">
        <img
          src="https://www.google.com/s2/favicons?sz=64&domain_url=https://www.youtube.com/"
          alt="WebIcon"
        />
      </a>
      {/* OWN */}
      {data.webShortCuts.map((s) => (
        <a href={s.url} key={s.id}>
          <img src={s.imgUrl} alt="WebIcon" />
        </a>
      ))}

      <span style={{ color: "gray" }}>|</span>

      {inEditMode ? (
        <div className="editWebShortCuts">
          <input
            type="text"
            placeholder="Enter URL"
            onChange={(e) => setNewUrl(e.target.value)}
          />
          <button onClick={() => setEditMode(false)}>
            <GrClose />
          </button>
          <button onClick={() => handelAddWebShortCut()}>
            <GrAdd />
          </button>
        </div>
      ) : (
        <button onClick={() => setEditMode(true)}>
          <FaPencil />
        </button>
      )}
    </div>
  );
}
