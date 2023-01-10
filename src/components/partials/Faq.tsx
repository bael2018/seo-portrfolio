import { faqState } from "../../constants"
import Title from "../elements/Title"
import { useState } from "react"

const Faq = () => {
    const [active, setActive] = useState(0)

    return (
        <div id="faq">
            <Title title="FAQ"/>
            <div className="faq-wrapper">
                {faqState.map(({ title, id, content }) => (
                    <div 
                        onClick={() => setActive(id === active ? 0 : id)} 
                        key={id} 
                        className={`faq-wrapper__child ${id === active && 'faq-wrapper__child_active'}`}
                    >
                        <h4>{title}</h4>
                        <div>
                            {content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq