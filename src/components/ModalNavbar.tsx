import { ServicesContext } from "../context/servicesContext"
import { useState , useContext} from 'react'
import { navLinks } from "../constants"

const ModalNavbar = () => {
  const servicesModal = useContext(ServicesContext)
  const [active, setActive] = useState(0)

  const modalCloser = () => {
    servicesModal?.setModalNavbar(false)
  }

  const modalLinkHandler = (id: number) =>  {
    setActive(id)
    modalCloser()
  }

  return (
    <div className={`modal-navbar ${servicesModal?.isModalNavbar ? 'active-navbar' : ''}`}>
      <div className="modal-navbar__wrapper">
        <span onClick={modalCloser}>X</span>
        <ul>
          {navLinks.map(({ href, id, title }) => (
            <li className={`${id === active && 'modal_activeLink'}`}  key={id}>
              <a 
                onClick={() => modalLinkHandler(id)} 
                href={href}
                >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ModalNavbar