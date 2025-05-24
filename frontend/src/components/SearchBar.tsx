import { FiHome } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import "../styles/SearchBar.css";
import { useState, useEffect } from "react";
import { useTabContext } from "../context/TabContext";

export default function SearchBar() {
  const { tabs, activeTabId, updateTab } = useTabContext();
  const activeTab = tabs.find((t) => t.id === activeTabId);
  const [value, setValue] = useState(activeTab?.url || "");

  useEffect(() => {
    setValue(activeTab?.url || "");
  }, [activeTabId]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!activeTab) return;
    const safeUrl = value.startsWith("http")
      ? value
      : `https://www.google.com/search?q=${encodeURIComponent(value)}`;
    updateTab(activeTab.id, { url: safeUrl });
  }

  function backHome() {
    if (!activeTab) return;
    updateTab(activeTab.id, { url: "https://www.google.com/" });
  }

  function favPage() {
    console.log(`★ Adding to favorites: ${value}`);
    // window.electronAPI.saveFavorite?.(value);
  }

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <button type="button" onClick={backHome}>
        <FiHome />
      </button>
      <input
        type="text"
        value={value}
        placeholder="Search with Google or enter URL"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={favPage}>
        <FaRegStar />
      </button>
    </form>
  );
}
