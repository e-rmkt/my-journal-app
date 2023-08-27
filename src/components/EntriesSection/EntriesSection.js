import "./EntriesSection.css";
import TabBar from "../TabBar/TabBar";
import EntryList from "../EntryList/EntryList";

export default function EntriesSection() {
  return (
    <section className="entries-section">
      <TabBar />
      <div className="entries-section__entries">
        <EntryList />
      </div>
    </section>
  );
}
