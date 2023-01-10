import ContactBtn from "../elements/ContactBtn"

const Heading = () => {
  return (
    <div style={{background: "url('/img/heading-min.jpg') center / cover fixed"}} className="heading">
      <div>
        <h1>SEO оптимизация</h1>
        <h3>Эффективное продвижение вашего сайта</h3>
        <ContactBtn isInside/>
      </div>
    </div>
  )
}

export default Heading