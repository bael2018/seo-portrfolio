import { ServicesContext } from './context/servicesContext';
import Services from './components/partials/Services';
import Clients from './components/partials/Clients';
import Reviews from './components/partials/Reviews';
import Heading from './components/partials/Heading';
import About from './components/partials/About';
import Modal from './components/modals/Modal';
import Faq from './components/partials/Faq';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import './styles/style.css'
import 'swiper/css';

function App() {
  const [isModal , isModalSet] = useState<boolean>(false)
  const [isContent , setIsContact] = useState<boolean | number>(0)

  const setModal = () => {
    isModalSet(!isModal)
  }

  const setContent = (content: boolean | number) => {
    setIsContact(prev => prev = content)
  }

  return (
    <ServicesContext.Provider value={{ isModal, setModal, setContent, isContent }}>
      <Modal/>
      <Navbar/>
      <Heading/>
      <About/>
      <Clients/>
      <Reviews/>
      <Services/>
      <Faq/>
      <Footer/>
    </ServicesContext.Provider>
  );
}

export default App;
