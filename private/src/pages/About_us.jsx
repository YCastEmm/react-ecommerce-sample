const AboutUs = () => {
    return (
        <div className="about-us-container width-content">
            
            <div className="about-us-row">
                <div className="about-us-title">
                    <h1>
                        Nuestro sueño 
                        <br />
                        es que cada paso cuente 
                        <br />
                        y transforme el mundo
                    </h1>
                </div>
                <div className="about-us-first-img">
                    <img src="src/assets/about_us.webp" alt="" />
                </div>
            </div>
            <div className="about-us-row">
                <div className="about-us-second-img">
                    <img src="src/assets/about_us_2.webp" alt="" />
                </div>
                <div className="about-us-text">    
                    <p>
                        Desde 2015, en Indigo transformamos el amor por el running en una experiencia única. Diseñamos calzado, indumentaria y accesorios que te acompañan en cada paso, desde tus primeras zancadas hasta alcanzar tus metas más ambiciosas. Nos mueve la pasión por el deporte y el compromiso con el planeta, combinando rendimiento, estilo y sostenibilidad.
                    </p>
                    <p>
                        Con materiales de alta calidad y procesos innovadores, buscamos maximizar tu desempeño mientras cuidamos el medio ambiente. Además, fortalecemos nuestra comunidad de corredores, creando un espacio donde cada carrera es un paso hacia un futuro más consciente y lleno de logros.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
