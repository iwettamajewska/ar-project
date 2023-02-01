// import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Opinion from "./components/Opinion";
import AboutMe from "./components/AboutMe";
import OfferOnline from "./components/OfferOnline";
import OfferMini from "./components/OfferMini";
import Certificates from "./components/Certificates";
import OfferStationary from "./components/OfferStationary";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <AboutMe />
      <Certificates />
      <OfferOnline />
      <OfferStationary />
      <OfferMini />
      <Contact />
      <Opinion />
      <Slider />
      <Footer />
    </>
  );
}

export default App;
