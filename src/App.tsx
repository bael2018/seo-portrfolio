import { ServicesContext } from './context/servicesContext';
import ContactMe from './components/partials/ContactMe';
import Services from './components/partials/Services';
import Clients from './components/partials/Clients';
import ModalNavbar from './components/ModalNavbar';
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
  const [isContent , setIsContact] = useState<boolean | number>(0)
  const [isModalNavbar , setNavbar] = useState<boolean>(false)
  const [isModal , isModalSet] = useState<boolean>(false)

  const setModal = () => {
    isModalSet(!isModal)
  }

  const setContent = (content: boolean | number) => {
    setIsContact(prev => prev = content)
  }

  const setModalNavbar = (isOpen: boolean) => {
    setNavbar(isOpen)
  }

  return (
    <ServicesContext.Provider value={{ isModal, setModal, setContent, isContent, isModalNavbar, setModalNavbar }}>
      {window.innerWidth < 700 && <ModalNavbar/>}
      <Modal/>
      <Navbar/>
      <Heading/>
      <Clients/>
      <Reviews/>
      <Services/>
      <About/>
      <Faq/>
      <ContactMe/>
      <Footer/>
    </ServicesContext.Provider>
  );
}

export default App;
