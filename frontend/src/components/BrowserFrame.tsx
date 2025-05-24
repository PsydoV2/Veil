import { useRef, useEffect } from "react";
import SearchBar from "./SearchBar";
import { useTabContext } from "../context/TabContext";
import "../styles/BrowserFrame.css";

export default function BrowserFrame() {
  const webviewRef = useRef<Electron.WebviewTag>(null);
  const { tabs, activeTabId, updateTab } = useTabContext();
  const activeTab = tabs.find((t) => t.id === activeTabId);

  useEffect(() => {
    if (!webviewRef.current || !activeTab) return;

    const view = webviewRef.current;

    const handleTitle = () => {
      const title = view.getTitle?.() || "New Tab";
      updateTab(activeTab.id, { title });
    };

    const handleFavicon = () => {
      view
        .executeJavaScript(
          `(() => {
          const links = document.querySelectorAll('link[rel~="icon"]');
          return links.length ? links[0].href : '';
        })()`
        )
        .then((favicon) => {
          if (typeof favicon === "string") {
            updateTab(activeTab.id, { favicon });
          }
        });
    };

    view.addEventListener("page-title-updated", handleTitle);
    view.addEventListener("did-finish-load", handleFavicon);

    return () => {
      view.removeEventListener("page-title-updated", handleTitle);
      view.removeEventListener("did-finish-load", handleFavicon);
    };
  }, [activeTab?.id, activeTab?.url]);

  const handleSearch = (value: string) => {
    const safeUrl = value.startsWith("http") ? value : `https://${value}`;
    if (activeTab) updateTab(activeTab.id, { url: safeUrl });
  };

  return (
    <div className="browserFrame">
      <SearchBar onSearch={handleSearch} defaultValue={activeTab?.url || ""} />
      <webview
        ref={webviewRef}
        src={activeTab?.url || "https://google.com"}
        className="browserView"
        style={{ width: "100%", height: "100%" }}
        allowpopups
      />
    </div>
  );
}
