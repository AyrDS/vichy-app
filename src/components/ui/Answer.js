import PropTypes from 'prop-types';
const Answer = ({ correct, isTrue, showAnswer, incorrect }) => {
    return (
        <>
            {
                isTrue && showAnswer &&
                (
                    <img className="animate__animated animate__fadeInUp answer" src={correct} alt="Respuesta" />
                )
            }
            {
                !isTrue && showAnswer &&
                (
                    <img className="animate__animated animate__fadeInUp answer" src={incorrect} alt="Respuesta" />
                )
            }
        </>
    );
}

Answer.propTypes = {
    correct: PropTypes.string.isRequired,
    incorrect: PropTypes.string.isRequired,
    isTrue: PropTypes.bool.isRequired,
    showAnswer: PropTypes.bool.isRequired,
}

export default Answer;