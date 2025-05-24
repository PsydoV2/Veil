import Tab from "./Tab";
import "../styles/TabLeiste.css";
import { GrAdd } from "react-icons/gr";

export default function TabLeiste() {
  return (
    <div className="tabLeiste">
      <Tab></Tab>
      <button>
        <GrAdd />
      </button>
    </div>
  );
}
