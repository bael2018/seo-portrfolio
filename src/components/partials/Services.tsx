import { useContext } from "react"
import { servicesList } from "../../constants"
import { ServicesContext } from "../../context/servicesContext"
import Title from "../elements/Title"

const Services = () => {
  const servicesModal = useContext(ServicesContext)

  const servicesModalHandler = (content: number) => {
    servicesModal?.setModal()
    servicesModal?.setContent(content)
  }
  
  return (
    <div id="services">
      <Title title="УСЛУГИ"/>
      <div className="services-container">
        {
          servicesList.map(({ id, title }) => (
            <div 
              key={id} 
              onClick={() => servicesModalHandler(id)} 
              className="services-container__child"
            >
              {title}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services