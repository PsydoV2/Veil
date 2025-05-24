import { GrClose } from "react-icons/gr";
import "../styles/Tab.css";

export default function Tab() {
  return (
    <div className="tab">
      <img src="logo.png" alt="" />
      <p>WebsiteName</p>
      <GrClose />
    </div>
  );
}
