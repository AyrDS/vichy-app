import { useState } from "react";
import correct from "../../assets/img/CORRECTO.png";
import incorrect from "../../assets/img/INCORRECTO.png";
import Answer from "../ui/Answer";
import Logo from "../ui/Logo";

const Question2 = ({ history }) => {

    const [isTrue, setIsTrue] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false)

    const handleClick = (e) => {
        if (e.target.classList.contains("true")) {
            setIsTrue(true);
        } else {
            setIsTrue(false);
        }
        setShowAnswer(true);
        setTimeout(() => {
            history.push("/question3");
        }, 1500);
    }

    return (
        <main className="animate__animated animate__fadeIn mainQuestion2">
            <div className="container">
                <Logo />
                
                <h1>¿La vitamina c <span className="d-b">mancha?</span></h1>
                <div className="containerFlex">
                    <button className="btn-square true" onClick={handleClick} disabled={showAnswer}>Verdadero</button>
                    <button className="btn-square" onClick={handleClick} disabled={showAnswer}>Falso</button>
                </div>
                
                <Answer correct={correct} incorrect={incorrect} isTrue={isTrue} showAnswer={showAnswer} />
            </div>
        </main>
    );
}

export default Question2;