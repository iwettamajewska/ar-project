import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Opinion from "./components/Opinion";
import AboutMe from "./components/AboutMe";
import OfferOnline from "./components/OfferOnline";
import OfferMini from "./components/OfferMini";
import Certificates from "./components/Certificates";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <OfferMini />
      <OfferOnline />
      <Offer />
      <AboutMe />
      <Contact />
      <Certificates />
      <Opinion />
      <Footer />
    </>
  );
}

export default App;
