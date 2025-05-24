import { FiHome } from "react-icons/fi";
import "../styles/SearchBar.css";
import { FaRegStar } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="searchBar">
      <button>
        <FiHome />
      </button>
      <input type="text" placeholder="Search with Google or enter URL"></input>
      <button>
        <FaRegStar />
      </button>
    </div>
  );
}
