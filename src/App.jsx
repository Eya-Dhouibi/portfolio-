import Hero from "./components/Hero";
import Header from "./components/inc/Header";
import Contact from "./components/Contact";
import Footer from "./components/inc/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div id="up">
      <div className="top-section">
      <Header />
      <Hero />
      </div>

      <div className="divider" />
      <Main />
      <div className="divider" />
      
      <Contact />
      <div className="divider" />
      <Footer />
    </div>
  );
}

export default App;
