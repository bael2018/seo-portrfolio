import { navLinks } from "../constants"
import { useState } from "react"

const Navbar = () => {
  const [active, setActive] = useState(0)

  return (
    <div className='navbar'>
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