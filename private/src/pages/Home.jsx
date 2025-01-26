import calzadoImg from "../assets/calzado.webp";
import tecnoImg from "../assets/tecno.webp";
import accesoriosImg from "../assets/accesorios.webp";
import outfitImg from "../assets/outfit.webp";
import imagen6 from "../assets/walking-ezgif.com-rotate.gif";

import { Link } from "react-router-dom";
import CuotasSinInteres from "../components/FreeShipping";

const Home = () => {
    return (
        <div>
            <img className="banner" src={imagen6} alt="Banner" />

            <CuotasSinInteres></CuotasSinInteres>
            <div className="width-content">
                <div className="width-content home-container">
                    
                    <div className="row-home-img">
                        <div>
                            <Link to="/catalogo?filter=zapatillas">
                                <img className="calzado-img img-hover-grow-left shadow" src={calzadoImg} alt="" />
                            </Link>
                        </div>
                        <div>
                            <Link to="/catalogo?filter=tecnologia">
                                <img className="tecno-img img-hover-grow-right shadow" src={tecnoImg} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="row-home-img">
                        <div>
                            <Link to="/catalogo?filter=accesorios">
                                <img className="accesorios-img img-hover-grow-left shadow" src={accesoriosImg} alt="" />
                            </Link>
                        </div>
                        <div>
                            <Link to="/catalogo?filter=indumentaria">
                                <img className="outfit-img img-hover-grow-right shadow" src={outfitImg} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Home;
