import { useContext, useState } from "react";
import Logo from "../ui/Logo";
import correct from "../../assets/img/CORRECTO.png";
import incorrect from "../../assets/img/INCORRECTO.png";
import Answer from "../ui/Answer";
import { context } from "../../context/Points";

const Question1 = ({ history }) => {

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
            history.push("/question2");
        }, 1500);
    }

    return (
        <main className="mainQuestion1 animate__animated animate__fadeIn">
            <div className="container">
                <Logo />

                <h1>¿Qué porcentaje de <span className="d-b">vitamina c contienen las</span> ampollas peptide-c?</h1>
                <div className="gridContainerQuestion">
                    <button className="btn-reply" onClick={handleClick} disabled={showAnswer}>8%</button>
                    <button className="btn-reply true" onClick={handleClick} disabled={showAnswer}>10%</button>
                    <button className="btn-reply" onClick={handleClick} disabled={showAnswer}>5%</button>
                    <button className="btn-reply" onClick={handleClick} disabled={showAnswer}>2.5%</button>
                </div>

                <Answer correct={correct} incorrect={incorrect} isTrue={isTrue} showAnswer={showAnswer} />
            </div>
        </main>
    );
}

export default Question1;