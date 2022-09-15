import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About-me";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <header>
        <Header />
      </header>
      <main>
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
