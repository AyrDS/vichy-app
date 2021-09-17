import { Link } from "react-router-dom";
import Logo from "./ui/Logo";

const Welcome = () => {
    return (
        <main className="mainWelcome">
            <div className="container">
                <Logo />
                <div className="containerFlex">
                    <h1>Bienvenidos a la trivia <span className="d-b">de ampollas vichy</span></h1>
                    <h3>¡Mucha Suerte!</h3>

                    <div className="containerBtn">
                        <Link className="btn" to="/question1">Comenzá acá</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Welcome;