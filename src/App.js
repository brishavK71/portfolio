import './App.css';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Navbar from './Component/NavBar/Navbar';
import Experience from './Component/Experience/Experience';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
