import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Opinion from "./components/Opinion";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Offer />
      <AboutMe />
      <Contact />
      <Opinion />
      <Footer />
    </>
  );
}

export default App;
