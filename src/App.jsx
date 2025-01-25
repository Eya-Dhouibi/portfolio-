import Hero from "./components/Hero";
import Header from "./components/inc/Header";
import Contact from "./components/Contact";
import Footer from "./components/inc/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div id="up" className="container">
      <Header />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      
      <Contact />
      <div className="divider" />
      <Footer />

    <a href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
    </a>
    </div>
  );
}

export default App;
