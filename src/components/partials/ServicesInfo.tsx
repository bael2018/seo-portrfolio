import { ServicesContext } from "../../context/servicesContext"
import ContactBtn from "../elements/ContactBtn"
import { servicesList } from "../../constants"
import { useContext, useMemo } from "react"

const ServicesInfo = () => {
  const servicesModal = useContext(ServicesContext)

  const service = useMemo(() => {
    return servicesList.find((service) => service.id === servicesModal?.isContent)
  }, [servicesModal?.isContent])

  return (
    <div className="service-info">
      <h3 className="service-info__title">{service?.title}</h3>
      <p className="service-info__text">{service?.content}</p>
      <div className="service-info__btn">
        <ContactBtn isInside={false}/>
      </div>
    </div>
  )
}

export default ServicesInfo