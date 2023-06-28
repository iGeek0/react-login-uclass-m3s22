import axios from 'axios';
const URL_WS = process.env.REACT_APP_API;

const loginService = async (data) => {
    return await axios.post(`${URL_WS}/login`, data);
};

const registerService = async (data) => {
    return await axios.post(`${URL_WS}/signup`, data);
};

const updateUser = async (data) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return null;
    }
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return await axios.put(`${URL_WS}/actualizar_perfil`, data, config);
};


export { loginService, registerService, updateUser };