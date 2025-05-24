import { GrClose } from "react-icons/gr";
import "../styles/Tab.css";

interface Props {
  title: string;
  active?: boolean;
  iconUrl?: string;
  onClick?: () => void;
  onClose?: () => void;
}

export default function Tab({
  title,
  active,
  iconUrl,
  onClick,
  onClose,
}: Props) {
  return (
    <div className="tab" id={active ? "activeTab" : ""} onClick={onClick}>
      <img src={iconUrl || "logo.png"} alt="" />
      <p>{title || "New Tab"}</p>
      <button
        onClick={(e) => {
          e.stopPropagation(); // verhindert Tab-Wechsel beim Klick auf das X
          onClose?.();
        }}
      >
        <GrClose />
      </button>
    </div>
  );
}
