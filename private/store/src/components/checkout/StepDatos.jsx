
const StepDatos = () =>{
    return (
                <div>
                    <h2 className="checkout-subtitle">Completá tus datos</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Nombre Completo</label>
                            <input type="text" id="name" placeholder="Tu nombre" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Dirección</label>
                            <input type="text" id="address" placeholder="Tu dirección" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">Ciudad</label>
                            <input type="text" id="city" placeholder="Tu ciudad" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">Teléfono</label>
                            <input type="text" id="city" placeholder="Tu número de teléfono" required />
                        </div>
                    </form>
                </div>
    )
}

export default StepDatos