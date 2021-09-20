import { useContext } from "react";
import { context } from "../context/Points";
import Logo from "./ui/Logo";

const Welcome = ({ history }) => {

    const { reset } = useContext(context);

    const handleStart = () => {
        reset();
        history.push("/question1");
    }

    return (
        <main className="mainWelcome">
            <div className="container">
                <Logo />
                <div className="containerFlex">
                    <h1>Bienvenidos a la trivia <span className="d-b">de ampollas vichy</span></h1>
                    <h3>¡Mucha Suerte!</h3>

                    <div className="containerBtn">
                        <button className="btn" onClick={handleStart} >Comenzá acá</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Welcome;