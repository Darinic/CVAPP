import React from "react";

const ContactMeItem = ({ icon, name, contact }) => {
  return (
    <div className="contactMe__item">
      <img src={icon} alt={name + "icon"} />
      <p className="contactMe__item--label">{name}</p>
      <p className="contactMe__item--paragraph">{contact}</p>
      <a className="contactMe__item--link" href={name === "Email" ? `mailto:${contact}` : contact}>
        Send a message
      </a>
    </div>
  );
};

export default ContactMeItem;
