import "./Tabs.css";
import Badge from "../Badge/Badge";

export default function Tabs() {
  return (
    <>
      <button className="tab tab--active">
        All Entries
        <Badge />
      </button>

      <button className="tab">
        Favorites
        <Badge />
      </button>
    </>
  );
}
