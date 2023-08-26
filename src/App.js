import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EntryForm from "./components/EntryForm/EntryForm";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <EntryForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
