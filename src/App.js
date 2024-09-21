import Companies from "./components/companies";
import Context from "./components/Context";
import Header from "./components/header";
import Home from "./components/home";
import Residencies from "./components/Residencies";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Value from "./components/value";
import Contact from "./components/contact";
import Start from "./components/start";
import Footer from "./components/footer";

AOS.init({
  duration: 1000,
  easing: 'linear'
})

function App() {
  return (
      <>
      <div className="overflow-x-clip">
        <Header/>
        <div className="absolute size-[20rem] md:size-[26rem] bg-white rounded-full blur-3xl -top-9 -left-9 opacity-40 z-20 pointer-events-none"></div>
        <Home/>
      </div>
        <Companies/>
        <Context>
          <Residencies/>
        </Context>
        <Value/>
        <Contact/>
        <Start/>
        <Footer/>
      </>
  );
}

export default App;
