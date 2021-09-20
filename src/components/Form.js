import Swal from 'sweetalert2';
import { useForm } from "../hooks/useForm";
import { useContext, useState } from 'react';
import Checkbock from './ui/Checkbox';
import Logo from "./ui/Logo";
import star from "../assets/img/Star.png";
import { context } from '../context/Points';



const Form = ({ history }) => {

    const { points } = useContext(context);
    const [checked, setChecked] = useState(false);

    const [formValues, handleInputChange] = useForm({
        name: "",
        addres: "",
        location: "",
        cp: "",
        check: false
    });

    const { name, addres, location, cp } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            history.push("/form/valid");
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0 || addres.trim().length === 0 || location.trim().length === 0 || cp.length < 4 || !checked) {
        history.push("/form/notvalid");
            return false
        }

        return true;
    }

    const handleByC = () => {
        Swal.fire({
            title: "Bases y condiciones",
            confirmButtonText: "ACEPTAR",
            html: "<p>Al suministrar tus datos personales aceptas los Términos Legales y la Política de Privacidad de Vichy Argentina la cual se encuentra disponible en nuestro sitio web. En el marco de esta acciñon, adquirirás como beneficio un kit de producto compuiesto por Ampollas Vichi Liftactiv de forma gratuita en el plazo de 20 días.</p>",
            buttonsStyling: false,
            showCancelButton: true,
            cancelButtonText: "CANCELAR",
            customClass: {
                title: "title-class",
                confirmButton: "btn-tyc",
                cancelButton: "btn-tyc-cancel",
                popup: "popup"
            }
        });
    }

    return (
        <main className="animate__animated animate__fadeIn mainForm">
            <div className="container">
                <Logo />

                <p className="title">HICISTE</p>
                <div className="flexTitle">
                    <img src={star} alt="star" className="star" />
                    <p><span>{points}</span>pts.</p>
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
                            <p onClick={handleByC} >Acepto Bases y Condiciones</p>
                            <Checkbock checked={checked} setChecked={setChecked} />
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Form;