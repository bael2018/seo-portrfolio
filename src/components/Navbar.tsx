import { ServicesContext } from "../context/servicesContext"
import { useState , useContext} from "react"
import { navLinks } from "../constants"

const Navbar = () => {
  const servicesModal = useContext(ServicesContext)
  const [active, setActive] = useState(0)

  return (
    <div className='navbar'>
      <div onClick={() => servicesModal?.setModalNavbar(true)} className="navbar-burger">
        <span></span><span></span><span></span>
      </div>
      <ul>
        {navLinks.map(({ href, id, title }) => (
          <li key={id}>
            <a 
              onClick={() => setActive(id)} 
              className={`${id === active && 'navbar_activeLink'}`} 
              href={href}
              >
              {title}
            </a>
          </li>
        ))} 
      </ul>
    </div>
  )
}

export default Navbar