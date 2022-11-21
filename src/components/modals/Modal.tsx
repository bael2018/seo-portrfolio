import { ServicesContext } from "../../context/servicesContext"
import ServicesInfo from "../partials/ServicesInfo"
import ContactForm from "../partials/ContactForm"
import { AiOutlineClose } from "react-icons/ai"
import { useContext } from "react"

const Modal = () => {
  const servicesModal = useContext(ServicesContext)
  
  return (
    <div className={`modal ${servicesModal?.isModal && 'modal_active'}`}>
      <div className="modal-wrapper">
        <div onClick={servicesModal?.setModal} className="modal-wrapper__closer">
          <AiOutlineClose/>
        </div>
        { servicesModal?.isContent ? <ServicesInfo/> : <ContactForm/> }
      </div>
    </div>
  )
}

export default Modal