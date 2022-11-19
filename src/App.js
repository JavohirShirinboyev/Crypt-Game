import { useEffect } from "react";
// import pages
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BuySell from "./components/BuySell";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Designs from "components/Designs";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    const registerAnimations = () => {
      const sr = ScrollReveal({
        origin: 'bottom',
        distance: '90px',
        duration: 2000,
        reset: false
      })
      sr.reveal(
        `nav,#home,#buySell1,#buySell2,#buySell3,#blogs,footer`, 
        {
          opacity: 0,
          interval: 200,
        })
    }
    registerAnimations()
  }, []);
  window.setTimeout(() => {
    const home = document.getElementById("home");
    home.style.transform="none";
  }, 1500)
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Home />
      <Designs />
      <BuySell />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
