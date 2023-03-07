import React from "react";
import mailIcon from '../../assets/images/mailIcon.png';
import linkedInIcon from '../../assets/images/linkedInIcon.png';
import facebookIcon from '../../assets/images/facebookIcon.png';
import ContactMeItem from "../ContactMeItem/ContactMeItem";
import Form from "../Form/Form";

const ContactMe = () => {
    return (
        <div className="contactMe">
            <h1 className="heading__primary">Get in Touch!</h1>
            <div className="contactMe__container">
                <ContactMeItem icon={mailIcon} name="Email" contact="arinic.daniil@gmail.com"/>
                <ContactMeItem icon={linkedInIcon} name="LinkedIn" contact="https://www.linkedin.com/in/daniil-arinic-4a08591b2/"/>
                <ContactMeItem icon={facebookIcon} name="Facebook" contact="https://www.facebook.com/danilas.arinic/"/>
            </div>
            <div className="contactMe__formContainer">
                <Form />
            </div>
        </div>
    );
};

export default ContactMe;