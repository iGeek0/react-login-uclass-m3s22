import { useState } from "react";

function Profile() {

    const [formularioPerfil, setFormularioPerfil] = useState({
        nombre: '',
        email: '',
        dob: '',
        password: ''
    });

    const handleInputChange = (e) => {
        // el evento de cambio en los input
        setFormularioPerfil({
            ...formularioPerfil,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        // este es el evento de envio del formulario
        e.preventDefault();
        console.log(formularioPerfil);
        // ...llamada a actualizar el perfil.....
    }


    return (
        <div className="container mt-4">
            <form className="form-login" onSubmit={handleSubmit}>
                <h1 className="text-center mb-5">Informacion de la cuenta</h1>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control form-control-lg" value={formularioPerfil.nombre} onChange={handleInputChange} name="nombre"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control form-control-lg" value={formularioPerfil.email} onChange={handleInputChange} name="email"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha nacimiento</label>
                    <input type="date" className="form-control form-control-lg" value={formularioPerfil.dob} onChange={handleInputChange} name="dob"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label form-label-lg">Password</label>
                    <input type="password" className="form-control form-control-lg" value={formularioPerfil.password} onChange={handleInputChange} name="password"/>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    );
}

export default Profile;