import Swal from 'sweetalert2';
import Logo from "./ui/Logo";
import star from "../assets/img/Star.png";
import { useForm } from "../hooks/useForm";


const Form = ({ history }) => {

    const [formValues, handleInputChange, handleCheckbox] = useForm({
        name: "",
        addres: "",
        location: "",
        cp: "",
        check: false
    });

    const { name, addres, location, cp, check } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            console.log("Todo ok mi rey");
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0 || addres.trim().length === 0 || location.trim().length === 0 || cp.length < 4 || !check) {
            Swal.fire({
                title: "Hubo un error al completar tus datos",
                confirmButtonText: "Continuar",
                buttonsStyling: false,
                customClass: {
                    title: "title-class",
                    confirmButton: "btn",
                }
            });
            return false
        }

        return true;
    }

    return (
        <main className="animate__animated animate__fadeIn mainForm">
            <div className="container">
                <Logo />

                <p className="title">HICISTE</p>
                <div className="flexTitle">
                    <img src={star} alt="star" className="star" />
                    <p><span>120</span>pts.</p>
                </div>
                <p>Completá acá tus datos para que puedas <span className="d-b">recibir la ampolla gratis en tu casa</span></p>

                <form className="txtCenter formFlex" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nombre y apellido" name="name" value={name} onChange={handleInputChange} />
                    <input type="text" placeholder="Dir: (ej: Av. Libertador 1234, piso 6, depto A)" name="addres" value={addres} onChange={handleInputChange} />
                    <div className="formFlex--row">
                        <input type="text" placeholder="Localidad" name="location" value={location} onChange={handleInputChange} />
                        <input type="number" placeholder="Código postal" name="cp" value={cp} onChange={handleInputChange} />
                    </div>
                    <div className="containerBtnForm">
                        <button type="submit" className="btn">Continuar</button>
                        <div>
                            <input id="check" type="checkbox" name="check" value={check} onClick={handleCheckbox} />
                            <label htmlFor="check">Acepto Bases y Condiciones</label>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Form;