import { Link, useParams } from "react-router-dom";
import Logo from "./ui/Logo";


const Finish = () => {

    const { valid } = useParams();

    if (valid === "notvalid") {

        return (
            <main className="mainWelcome animate__animated animate__fadeIn">
                <div className="container">
                    <Logo />
                    <div className="containerFinish txtCenter">
                        <h1>Hubo un error al <span className="d-b">completar tus datos</span></h1>
                        <Link to="/form" className="btn">Continuar</Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="mainWelcome animate__animated animate__fadeIn">
            <Logo />
            <div className="container valid">
                <div className="containerValid" >
                    <h1>¡Gracias por <span className="d-b">completar tus</span> datos!</h1>
                    <p>Recordá que si subis tu producto de Anti Edad de <b>Vichy</b> favorito con <span>#AntiEdadVichy</span> tendrás chances de recibir una ampollo <b>Glico-C</b></p>
                    <Link to="/" className="btn">Continuar</Link>
                </div>
            </div>
        </main>
    )
}

export default Finish;