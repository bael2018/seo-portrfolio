import { faqState } from "../../constants"
import { useState } from "react"
import Title from "../elements/Title"

const Faq = () => {
    const [active, setActive] = useState(0)

    return (
        <div id="faq">
            <Title title="FAQ"/>
            <div className="faq-wrapper">
                {faqState.map(({ title, id }) => (
                    <div 
                        onClick={() => setActive(id === active ? 0 : id)} 
                        key={id} 
                        className={`faq-wrapper__child ${id === active && 'faq-wrapper__child_active'}`}
                    >
                        <h4>{title}</h4>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque obcaecati placeat dolore quaerat dolorum tenetur nihil reiciendis id vel! Quia non ducimus consequatur voluptas possimus molestiae facilis molestias ad.
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq