const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content width-content">
                    {/* Bloque adicional (por ejemplo, información legal o enlaces) */}
                    <div className="footer-block extra-info">
                        <a href="/privacidad">Política de privacidad</a>
                        <a href="/terminos">Términos y condiciones</a>
                    </div>

                    {/* Bloque de Redes Sociales */}
                    <div className="footer-block social-media">
                        <a href="https://instagram.com" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>

                    {/* Bloque de Contacto */}
                    <div className="footer-block contact">
                        <p>
                            <a href="https://www.google.com/maps?q=Avenida+Olivares+597,+Local+28,+CABA" target="_blank">
                                <i className="fas fa-map-marker-alt"></i>Avenida Olivares 597, Local 28, CABA
                            </a>
                        </p>
                        <div>
                            <a href="https://wa.me/1234567890" target="_blank">
                                <i className="fab fa-whatsapp"></i>+54 123 456-7890
                            </a>
                        </div>
                        <div>
                            <a href="mailto:info@indigostore.com.ar">
                                <i className="fas fa-envelope"></i>info@indigostore.com.ar
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-content-bottom">
                    
                    {/* Bloque de Redes Sociales */}
                    <div className="">
                        <p>&copy; 2024 Indigo Store </p>
                    </div>
                    <div className="">
                        <p>|</p>
                    </div>
                    {/* Bloque de Redes Sociales */}
                    <div className="">
                        <p>Todos los derechos reservados</p>
                    </div>
                    <div className="">
                        <p>|</p>
                    </div>

                    {/* Bloque de Redes Sociales */}
                    <div className="">
                        <p>Sitio web desarrollado por Yair Castagnola</p>
                    </div>

                    
                </div>

            </footer>
        </>
    );
};

export default Footer;
