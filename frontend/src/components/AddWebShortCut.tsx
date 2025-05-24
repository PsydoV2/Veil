import { useAppData } from "../context/AppDataContext";
import "../styles/AddWebShortCut.css";
import { useState } from "react";

export default function AddWebShortCut({
  closeAddWebShortCut,
}: {
  closeAddWebShortCut: () => void;
}) {
  const [url, setUrl] = useState("");
  const { data, updateWebShortCuts } = useAppData();

  function AddWebShortCutHandler() {
    if (!url) return;

    const newShortCut = {
      url,
      imgUrl: `https://www.google.com/s2/favicons?sz=64&domain_url=${url}`,
      id: Date.now(),
    };

    updateWebShortCuts([...data.webShortCuts, newShortCut]);
    closeAddWebShortCut();
  }

  return (
    <div className="addWebShortCut">
      <input
        type="text"
        placeholder="Enter Web URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={closeAddWebShortCut}>Cancel</button>
      <button onClick={AddWebShortCutHandler}>Save</button>
    </div>
  );
}
