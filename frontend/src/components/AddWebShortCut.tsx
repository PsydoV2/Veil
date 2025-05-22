import "../styles/AddWebShortCut.css";

interface Props {
  closeAddWebShortCut: () => void;
}

export default function AddWebShortCut(props: Props) {
  function AddWebShortCutHandler() {
    props.closeAddWebShortCut();
  }

  return (
    <div className="addWebShortCut">
      <input type="text" placeholder="Enter Weburl" />
      <button onClick={props.closeAddWebShortCut}>Cancel</button>
      <button onClick={AddWebShortCutHandler}>Save</button>
    </div>
  );
}
