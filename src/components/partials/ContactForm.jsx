import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ujsz173",
                "template_79cv8tp",
                form.current,
                "bw2OvHkeOYo2rCYiw"
            )
            .then(() => {
                e.target.reset();
            });
    };

    return (
        <div className="contact-form">
            <h4>Связаться</h4>

            <form ref={form} onSubmit={sendEmail}>
                <label className="contact-form__input">
                    <input name="user_name" required type="text" />
                    <span>Имя</span>
                </label>
                <label className="contact-form__input">
                    <input name="user_email" required type="email" />
                    <span>Email</span>
                </label>
                <label className="contact-form__textarea">
                    <textarea required name="message"></textarea>
                    <span>Сообщение</span>
                </label>
                <button type="submit">ПОДТВЕРДИТЬ</button>
            </form>
        </div>
    );
};

export default ContactForm;
