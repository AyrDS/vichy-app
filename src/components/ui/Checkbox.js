import isChecked from "../../assets/img/Check02.png";
import notChecked from "../../assets/img/Check01.png";
import PropTypes from 'prop-types';

const Checkbock = ({ checked, setChecked }) => {

    const handleCheck = () => {
        setChecked(!checked);
    }

    return (
        <>
            {
                checked ? (
                    <img src={isChecked} alt="check" className="check" onClick={handleCheck} />
                ) : (
                    <img src={notChecked} alt="check" className="notCheck" onClick={handleCheck} />
                )
            }
        </>
    );
}

Checkbock.propTypes = {
    checked: PropTypes.bool.isRequired,
    setChecked: PropTypes.func.isRequired,
}

export default Checkbock;