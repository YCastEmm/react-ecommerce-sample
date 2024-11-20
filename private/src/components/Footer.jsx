const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content width-content">
                    <p>Contacto: info@wannago.com | Teléfono: (123) 456-7890</p>
                    <nav className="footer-nav">
                    </nav>
                    <div className="social-media">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </div>
                    <form className="newsletter">
                        <input type="email" placeholder="Suscríbete a nuestro newsletter" />
                        <button type="submit">Suscribirse</button>
                    </form>
                </div>
                <p>Sitio web desarrollado por Yair Castagnola</p>
            </footer>{" "}
        </>
    );
};

export default Footer;
