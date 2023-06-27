import { useState } from "react";
import { updateUser } from '../services/Auth.services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Profile() {

    const [formProfile, setFormProfile] = useState({
        nombre: '',
        email: '',
        dob: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormProfile({
            ...formProfile,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(formProfile)
            .then((response) => {
                console.log(response);
                toast.success("Actualizado con exito!", {
                    position: toast.POSITION.TOP_RIGHT
                });
                clearForm();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const clearForm = () => {
        setFormProfile({
            nombre: '',
            email: '',
            dob: '',
            password: ''
        });
    }



    return (
        <div className="container mt-4">
            <ToastContainer />
            <form className="form-login" onSubmit={handleSubmit}>
                <h1 className="text-center mb-5">Informacion de la cuenta</h1>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control form-control-lg" onChange={handleInputChange} value={formProfile.nombre} name="nombre" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control form-control-lg" onChange={handleInputChange} value={formProfile.email} name="email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha nacimiento</label>
                    <input type="date" className="form-control form-control-lg" onChange={handleInputChange} value={formProfile.dob} name="dob" />
                </div>
                <div className="mb-3">
                    <label className="form-label form-label-lg">Password</label>
                    <input type="password" className="form-control form-control-lg" onChange={handleInputChange} value={formProfile.password} name="password" />
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    );
}

export default Profile;