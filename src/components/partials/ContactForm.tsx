import { FormEvent, MutableRefObject, useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef<MutableRefObject<HTMLFormElement>>()

  const contactFormHandler = (e: FormEvent) => {
    e.preventDefault()

    emailjs.sendForm('service_97gzmvi', 'service_97gzmvi', form.current, 'bw2OvHkeOYo2rCYiw')
  }

  return (
    <div className="contact-form">
      <h4>Связаться</h4>
      <form ref={form} onSubmit={contactFormHandler}>
        <label className="contact-form__input">
          <input 
            name='name'
            required 
            type="text" 
          />
          <span>Имя</span>
        </label>
        <label className="contact-form__input">
          <input 
            name='email'
            required 
            type="email" 
          />
          <span>Email</span>
        </label>
        <label className="contact-form__textarea">
          <textarea required name="message"></textarea>
          <span>Сообщение</span>
        </label>
        <button type="submit">ПОДТВЕРДИТЬ</button>
      </form>
    </div>
  )
}

export default ContactForm