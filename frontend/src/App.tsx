import "./styles/App.css";
import SearchBar from "./components/SearchBar";
import WindowControls from "./components/WindowControl";
import AddWebShortCut from "./components/AddWebShortCut";
import { useState } from "react";

function App() {
  const [addWebShortCutVis, setAddWebShortCutVis] = useState(false);

  return (
    <>
      <WindowControls
        openAddWebShortCut={() => setAddWebShortCutVis(!addWebShortCutVis)}
      ></WindowControls>
      <SearchBar></SearchBar>

      {addWebShortCutVis && (
        <AddWebShortCut
          closeAddWebShortCut={() => setAddWebShortCutVis(false)}
        ></AddWebShortCut>
      )}
    </>
  );
}

export default App;
