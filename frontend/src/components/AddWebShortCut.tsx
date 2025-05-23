import "../styles/AddWebShortCut.css";
import { useState } from "react";

interface Props {
  closeAddWebShortCut: () => void;
}

export default function AddWebShortCut(props: Props) {
  const [url, setUrl] = useState("");

  function AddWebShortCutHandler() {
    if (!url) return;

    window.electronAPI.addWebShortCut({
      url: url,
      imgUrl: `https://www.google.com/s2/favicons?sz=64&domain_url=${url}`,
      id: 0,
    });

    props.closeAddWebShortCut();
  }

  return (
    <div className="addWebShortCut">
      <input
        type="text"
        placeholder="Enter Web URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={props.closeAddWebShortCut}>Cancel</button>
      <button onClick={AddWebShortCutHandler}>Save</button>
    </div>
  );
}
