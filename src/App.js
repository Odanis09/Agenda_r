import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import AddContact from './AddContact';
import './App.css';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch('http://www.raydelto.org/agenda.php');
                const contacts = await response.json();
                setContacts(contacts);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    const addContact = async (contact) => {
        try {
            const response = await fetch('http://www.raydelto.org/agenda.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            });

            if (response.ok) {
                setContacts([...contacts, contact]);
                setMessage('Contacto agregado exitosamente.');
            } else {
                setMessage('Error al agregar el contacto.');
            }
        } catch (error) {
            console.error('Error adding contact:', error);
            setMessage('Error al agregar el contacto.');
        }

        setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
    };

    return (
        <div className="App">
            <h1>Agenda de Contactos</h1>
            {message && <div className="message">{message}</div>}
            <AddContact addContact={addContact} />
            <ContactList contacts={contacts} />
        </div>
    );
};

export default App;
