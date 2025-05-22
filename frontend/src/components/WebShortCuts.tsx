import { FaPlus } from "react-icons/fa6";
import "../styles/WebShortCuts.css";

interface Props {
  openAddWebShortCut: () => void;
}

export default function WebShortCuts(props: Props) {
  return (
    <div className="webShortCuts">
      <a href="">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
          alt=""
        />
      </a>
      <a href="">
        <img
          src="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png"
          alt=""
        />
      </a>

      <button onClick={props.openAddWebShortCut}>
        <FaPlus />
      </button>
    </div>
  );
}
