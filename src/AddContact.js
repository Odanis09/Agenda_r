import React, { useState } from 'react';

const AddContact = ({ addContact }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addContact({ nombre, apellido, telefono });
        setNombre('');
        setApellido('');
        setTelefono('');
    };

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                />
                <button type="submit">Agregar Contacto</button>
            </form>
        </div>
    );
};

export default AddContact;
