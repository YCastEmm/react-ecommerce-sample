import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [errorMsg, setErrorMsg] = useState("");

    const [formValues, setFormValues] = useState(true);

    const [LoginStep, SetLoginStep] = useState(1);

    const inputEmail = useRef(null);
    const inputPass = useRef(null);

    const irALogin = () => {
        setFormValues(true);
        SetLoginStep(1);
    };

    const irARecuperarPass = () => {
        setFormValues(true);
        setTimeout(() => {
            SetLoginStep(2);
        }, 400); 
    };

    // Función para ir al estado de mail enviado desde recuperar contraseña
    const irAEnviado = (e) => {
        e.preventDefault();

        // Validar si el campo de email está vacío.
        if (inputEmail.current.value === "") {
            setErrorMsg("Ingresá tu email para continuar");
            return setFormValues(false); // Mostrar error si está vacío.
        }

        // Expresión regular para validar formato de email.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validar si el email no cumple con el formato.
        if (!emailRegex.test(inputEmail.current.value)) {
            setErrorMsg("El email ingresado no es válido");
            return setFormValues(false);
        }

        // Simulación de espera antes de cambiar al paso de mail enviado
        setTimeout(() => {
            SetLoginStep(3);
        }, 1200);
    };


    // Función para restablecer el estado de validación cuando el usuario empieza a escribir en recuperar contraseña
    const handleFocusRecuPass = () => {
        if (inputEmail.current.value !== "") {
            setFormValues(true);
        }
    };

    // Función para manejar el intento de login
    const handleLogin = (e) => {
        e.preventDefault();

        // Validar si los campos están vacíos.
        if (inputEmail.current.value === "" || inputPass.current.value === "") {
            setErrorMsg("Completá todos los campos para continuar");
            return setFormValues(false);
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputEmail.current.value)) {
            setErrorMsg("El email ingresado no es válido");
            return setFormValues(false);
        }


        // Como esto es una página de muestra y no se configuró el backend para que se registren usuario reales, se tira siempre un mensaje de error al intentar loguearse 
        setTimeout(() => {
            setErrorMsg("El usuario o la contraseña ingresados no son válidos");
            setFormValues(false);
        }, 1000);
    };

    // Función para restablecer validaciones al interactuar con los campos de login
    const handleFocus = () => {
        if (inputEmail.current.value !== "" || inputPass.current.value !== "") {
            setFormValues(true);
        }
    };

    // Contenido para el formulario de login
    const loginForm = (
        <div className="login-container width-content">
            <div>
                <h2 className="login-title">Iniciar sesión</h2>
                <form action="" className="login-form">
                    <div className="form-group">
                        <label className="label-login" htmlFor="user">
                            Email
                        </label>
                        <input
                            className="input-login"
                            ref={inputEmail}
                            onFocus={handleFocus}
                            type="text"
                            name="user"
                            placeholder="Ingresá tu email"
                        />
                    </div>
                    <div className="form-group">
                        <label className="label-login" htmlFor="pass">
                            Contraseña
                        </label>
                        <input
                            className="input-login"
                            ref={inputPass}
                            onFocus={handleFocus}
                            type="password"
                            name="pass"
                            placeholder="Ingresá tu contraseña"
                        />
                    </div>

                    <button className="send-btn" onClick={handleLogin}>Ingresar</button>
                </form>
                <Link className="recu-pass" onClick={irARecuperarPass}>
                    <p>Recuperar contraseña</p>
                </Link>
                {!formValues && <p className="login-error">{errorMsg}</p>}
            </div>
        </div>
    );

    // Contenido para el formulario de recuperación de contraseña
    const recuperarPass = (
        <div className="login-container width-content">
            <div>
                <h2 className="login-title">Recuperar contraseña</h2>
                <form action="" className="login-form">
                    <div className="form-group">
                        <label className="label-login" htmlFor="user">
                            Ingresá tu email para recuperar la contraseña
                        </label>
                        <input
                            className="input-login"
                            ref={inputEmail}
                            onFocus={handleFocusRecuPass}
                            type="text"
                            name="user"
                            placeholder="Ingresá tu email"
                        />
                    </div>
                    <button className="send-btn" onClick={irAEnviado}>Enviar</button>
                </form>
                <Link className="recu-pass" onClick={irALogin}>
                    <p>Volver</p>
                </Link>
                {!formValues && <p className="login-error">{errorMsg}</p>}
            </div>
        </div>
    );

    // Contenido para el mensaje de mail enviado
    const mailEnviado = (
        <div className="sent-container">
            <img className="sent-image" src="../src/assets/sent.webp" alt="" />
            <h2 className="sent-title">¡Revisá tu correo!</h2>
            <h3 className="sent-subtitle">Te enviamos un enlace para restablecer tu contraseña.</h3>
            <Link className="recu-pass" onClick={irALogin}>
                <p>Volver</p>
            </Link>
        </div>
    );

    // Renderizado condicional basado en el estado LoginStep
    return (
        <div className="login-full-container width-content">
            <div>
                <img className="login-img" src="src/assets/login.webp" alt="" />
            </div>
            <div className="login-form-container">
                {LoginStep === 1 && loginForm}
                {LoginStep === 2 && recuperarPass}
                {LoginStep === 3 && mailEnviado}
            </div>
        </div>
    );
};

export default Login;
