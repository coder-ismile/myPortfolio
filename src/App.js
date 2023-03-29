import Home from './component/Home/Home';
import Header from './component/header/Header';
import About from './component/about/About';
import Skils from './component/skills/Skills';
import Portfolio from './component/portfolio/Portfolio';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';

function App() {
  return (
    <>
    <Header/>
      <Home/>
      <About/>
      <Skils/>
      <Portfolio/>
      <Contact/>
      <Footer/> 
    </>
  )
}

export default App;
