const AboutUs = () => {
    return (
        <div className="about-us-container width-content">
            <header className="about-us-header">
                <h1>INDIGO</h1>
                <h2 className="slogan">Llegá más lejos</h2>
            </header>
            <section className="about-us-content">
                <p>
                    En <strong>Indigo</strong>, creemos en el poder del movimiento. Nos dedicamos a crear calzado, 
                    indumentaria y accesorios que te acompañen en cada paso, desde tus primeras carreras hasta 
                    cruzar la meta de tus sueños.
                </p>
                <p>
                    Con materiales de alta calidad y un diseño pensado para maximizar tu rendimiento, 
                    nuestra misión es ayudarte a superar tus límites y disfrutar el viaje.
                </p>
            </section>
            <div className="about-us-visual">
                <img
                    src="https://via.placeholder.com/800x400?text=Indigo+Runners"
                    alt="Imagen inspiradora de corredores"
                    className="about-us-image"
                />
            </div>
            <section className="about-us-values">
                <h3>Nuestros valores</h3>
                <ul className="values-list">
                    <li>Pasión por el running.</li>
                    <li>Innovación en cada producto.</li>
                    <li>Sostenibilidad y respeto por el medio ambiente.</li>
                    <li>Compromiso con nuestra comunidad de corredores.</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutUs;
