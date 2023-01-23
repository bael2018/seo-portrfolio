import ContactBtn from "../elements/ContactBtn"

const ContactMe = () => {
  return (
    <div className="contact-me">
      <div className="contact-me__wrapper">
        <h3>Связаться со мной !</h3>
        <ContactBtn isInside/>
      </div>
    </div>
  )
}

export default ContactMe