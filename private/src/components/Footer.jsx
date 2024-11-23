const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content width-content">
                    {/* Bloque adicional (por ejemplo, información legal o enlaces) */}
                    <div className="footer-block extra-info">
                        <a href="/privacy-policy">Política de privacidad</a>
                        <a href="/terms">Términos y condiciones</a>
                    </div>

                    {/* Bloque de Redes Sociales */}
                    <div className="footer-block social-media">
                        <a href="https://instagram.com" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <p>Sitio web desarrollado por Yair Castagnola | &copy; 2024 Indigo Store </p>
                    </div>

                    {/* Bloque de Contacto */}
                    <div className="footer-block contact">
                        <p>
                            <a href="https://www.google.com/maps?q=Avenida+Olivares+597,+Local+28,+CABA" target="_blank">
                                <i class="fas fa-map-marker-alt"></i>Avenida Olivares 597, Local 28, CABA
                            </a>
                        </p>
                        <div>
                            <a href="https://wa.me/1234567890" target="_blank">
                                <i class="fab fa-whatsapp"></i>+54 123 456-7890
                            </a>
                        </div>
                        <div>
                            <a href="mailto:info@indigostore.com.ar">
                                <i class="fas fa-envelope"></i>info@indigostore.com.ar
                            </a>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Footer;
