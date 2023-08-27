import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EntryForm from "./components/EntryForm/EntryForm";
import EntriesSection from "./components/EntriesSection/EntriesSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <EntryForm />
        <EntriesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
