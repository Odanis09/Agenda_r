import React from 'react';

const ContactList = ({ contacts }) => {
    return (
        <div>
            <h2>Contactos</h2>
            <div>
                {contacts.map((contact, index) => (
                    <div key={index} className="contact-item">
                        {contact.nombre} {contact.apellido} - {contact.telefono}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactList;
