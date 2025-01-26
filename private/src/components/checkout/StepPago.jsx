const StepPago = () =>{
    return (
                <div>
                    <h2 className="checkout-subtitle">Método de Pago</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="card">Número de Tarjeta</label>
                            <input type="text" id="card" placeholder="**** **** **** ****" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name-lastname">Nombre y apellido del titular</label>
                            <input type="text" id="name-lastname" placeholder="Nombre y apellido tal cual figura en la tarjeta" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dni">DNI</label>
                            <input type="text" id="dni" placeholder="DNI del titular" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expiry">Fecha de Expiración</label>
                            <input type="text" id="expiry" placeholder="MM/AA" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cvv">CVV</label>
                            <input type="password" id="cvv" placeholder="***" required />
                        </div>
                    </form>
                </div>
    )
}

export default StepPago