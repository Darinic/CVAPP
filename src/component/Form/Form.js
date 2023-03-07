import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import { Alert } from 'react-bootstrap';

const Form = () => {
    const formRef = useRef();
    const [showAlert, setShowAlert] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "cvapp-379316",
                "template_g5wb38e",
                formRef.current,
                "ouDVYnXJN8HITr3zG"
            )
            .then(() => setShowAlert(true));

            e.target.reset();
    };

  return (
    <>
    <form ref={formRef} onSubmit={sendEmail} className="contactMe__form">
      <div className="contactMe__NameAndEmailBox">
        <div>
          <label className="contactMe__form--label" htmlFor="name">
            Name
          </label>
          <input
            className="contactMe__form--input"
            type="text"
            required
            minLength={2}
            maxLength={20}
            name="user_name"
            placeholder="Your name..."
          />
        </div>
        <div>
          <label className="contactMe__form--label" htmlFor="email">
            Email
          </label>
          <input
            className="contactMe__form--input"
            type="email"
            required
            minLength={5}
            maxLength={40}
            name="user_email"
            placeholder="Your email..."
          />
        </div>
      </div>
      <div>
        <label className="contactMe__form--label" htmlFor="message">
          Message
        </label>
        <textarea
          className="contactMe__form--textarea"
          id="message"
          required
          minLength={3}
          maxLength={350}
          name="message"
          placeholder="Your message..."
          style={{ resize: "none" }}
        ></textarea>
      </div>
      <div className="contactMe__ButtonAndAlertBox">
        <button
          className="contactMe__form--button"
          type="submit"
          value="Submit"
        >
          Submit
        </button>
        <div>
        {showAlert && (
        <Alert className="contactMe__Alert" variant="success" onClose={() => setShowAlert(false)}>
            Email sent successfully!
        </Alert>
    )}
        </div>
      </div>
    </form>
    </>
  );
};

export default Form;
