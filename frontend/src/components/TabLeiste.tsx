import Tab from "./Tab";
import "../styles/TabLeiste.css";
import { GrAdd } from "react-icons/gr";
import { useTabContext } from "../context/TabContext";

export default function TabLeiste() {
  const { tabs, activeTabId, setActiveTab, addTab, removeTab } =
    useTabContext();

  return (
    <div className="tabLeiste">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          active={tab.id === activeTabId}
          onClick={() => setActiveTab(tab.id)}
          title={tab.title}
          iconUrl={tab.favicon} // ✅ hinzufügen!
          onClose={() => removeTab(tab.id)} // ✅ optional gleich mit einbauen
        />
      ))}
      <button onClick={() => addTab()}>
        <GrAdd />
      </button>
    </div>
  );
}
