import { GrClose } from "react-icons/gr";
import "../styles/Tab.css";

interface Props {
  title?: string;
  active?: boolean;
  iconUrl?: string;
}

export default function Tab(props: Props) {
  return (
    <div className="tab" id={props.active ? "activeTab" : ""}>
      <img src={props.iconUrl || "logo.png"} alt="" />
      <p>{props.title || "New Tab"}</p>
      <GrClose />
    </div>
  );
}
