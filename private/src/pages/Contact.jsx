const Contacto = () => {
    return (
        <div className="width-content">
            <h2 className="titulo-seccion">Formulario de contacto</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" placeholder="Tu nombre" required />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Asunto</label>
                    <input type="text" id="name" name="name" placeholder="Asunto del mensaje" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" placeholder="Escribí tu consulta acá..." rows="5" required></textarea>
                </div>
                <button type="submit" className="send-btn">Enviar</button>
            </form>
        </div>
    );
};

export default Contacto;
