import { ServicesContext } from "../../context/servicesContext"
import { FC, useContext } from "react"

const ContactBtn = ({ isInside }: { isInside: boolean }) => {
  const servicesModal = useContext(ServicesContext)

  const contactFormHandler = (content: boolean | number) => {
    if(isInside) servicesModal?.setModal()
    servicesModal?.setContent(content)
  }

  return (
    <button 
      onClick={() => contactFormHandler(false)} 
      className="btn"
    >
      НАПИСАТЬ
    </button>
  )
}

export default ContactBtn