import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer' id='contacts'>
        <div className="footer-wrapper">
            <h4>Контакты</h4>
            <div>
                <a 
                    target='_blank' 
                    href="https://www.linkedin.com/in/sultanbek-temirbaev-9a87691a8/"
                    >
                    <AiFillLinkedin/> LinkedIn
                </a>
                <a 
                    target='_blank' 
                    href="https://www.instagram.com/sultanbek_temirbaev/"
                    >
                    <BsInstagram/> Instagram
                </a>
                <a 
                    target='_blank' 
                    href="https://telegram.me/sltemirbaev/"
                    >
                    <FaTelegramPlane/> Telegram
                </a>
                <a 
                    target='_blank' 
                    href="mailto:slt.tmrb@gmail.com"
                    >
                    <AiOutlineMail/> slt.tmrb@gmail.com 
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer