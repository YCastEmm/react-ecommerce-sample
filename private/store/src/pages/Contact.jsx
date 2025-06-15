import React, { useState } from "react";

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        message: ""
    });

    const [formSent, setFormSent] = useState(false); // Estado para controlar si el formulario se envió

    // Maneja el cambio en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Maneja el envío del formulario
    const handleSend = (e) => {
        e.preventDefault(); // Previene el envío del formulario por defecto
        
        // Aquí podrías hacer la lógica de enviar los datos (por ejemplo, a un servidor)

        // Cambiar el estado para indicar que el formulario fue enviado
        setFormSent(true);
    };

    return (
        <div className="width-content">
            
            {/* Si el formulario ya fue enviado, mostramos un mensaje de confirmación */}
            {formSent ? (
                <div className="width-content sent-container">
                    <img className="sent-image" src="../src\assets\sent.webp" alt=""/>
                    <h2 className="sent-title">Tu mensaje fue enviado correctamente.</h2>
                    <h3 className="sent-subtitle">Nos pondremos en contacto a la brevedad.</h3>
                </div>
            ) : (
                <div>
                    <h2 className="titulo-seccion">Formulario de contacto</h2>
                <form className="contact-form" onSubmit={handleSend}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Asunto</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Asunto del mensaje"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu correo electrónico"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Escribí tu consulta acá..."
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="send-btn">Enviar</button>
                </form>
                </div>
            )}
        </div>
    );
};

export default Contacto;
