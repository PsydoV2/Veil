import "./styles/App.css";
import WindowControls from "./components/WindowControl";
import BrowserFrame from "./components/BrowserFrame";
import TabLeiste from "./components/TabLeiste";

function App() {
  return (
    <>
      <WindowControls></WindowControls>
      <TabLeiste></TabLeiste>
      <BrowserFrame></BrowserFrame>
    </>
  );
}

export default App;
