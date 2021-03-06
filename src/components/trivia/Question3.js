import { useContext, useState } from "react";
import Logo from "../ui/Logo";
import correct from "../../assets/img/CORRECTO.png";
import incorrect from "../../assets/img/INCORRECTO.png";
import Answer from "../ui/Answer";
import { context } from "../../context/Points";

const Question3 = ({ history }) => {

    const { addPoints } = useContext(context);
    const [isTrue, setIsTrue] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false)

    const handleClick = (e) => {
        if (e.target.classList.contains("true")) {
            setIsTrue(true);
            addPoints(60);
        } else {
            setIsTrue(false);
        }
        setShowAnswer(true);
        setTimeout(() => {
            history.replace("/");
            history.push("/form");
        }, 1500);
    }

    return (
        <main className="mainQuestion3 animate__animated animate__fadeIn">
            <div className="container">
                <Logo />

                <h1>Las ampollas peptide-c <span className="d-b">se usan solo de día</span></h1>
                <div className="containerFlex">
                    <button className="btn-square" onClick={handleClick} disabled={showAnswer}>Verdadero</button>
                    <button className="btn-square true" onClick={handleClick} disabled={showAnswer}>Falso</button>
                </div>

                <Answer correct={correct} incorrect={incorrect} isTrue={isTrue} showAnswer={showAnswer} />
            </div>

        </main>
    );
}

export default Question3;