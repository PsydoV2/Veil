import { useAppData } from "../context/AppDataContext";
import "../styles/WebShortCuts.css";
import { FaPlus } from "react-icons/fa6";

export default function WebShortCuts({
  openAddWebShortCut,
}: {
  openAddWebShortCut: () => void;
}) {
  const { data } = useAppData();

  return (
    <div className="webShortCuts">
      {data.webShortCuts.map((s) => (
        <a href={s.url} key={s.id}>
          <img src={s.imgUrl} alt="WebIcon" />
        </a>
      ))}
      <button onClick={openAddWebShortCut}>
        <FaPlus />
      </button>
    </div>
  );
}
