import { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState(null);
    const [userName, setUserName] = useState("None User")

    const toggleLogin = () => {
        setIsLogin(!isLogin);
    }

    const login = () => {
        // que hacemos para establecer el login
        setIsLogin(true);
        const token_decoded = jwt_decode(token);
        setUserName(token_decoded.data.nombre);

    }

    const logout = () => {
        // que hacemos para establecer el logout
        setIsLogin(false);
    }

    return (
        <AuthContext.Provider value={{ isLogin, token, toggleLogin, setToken, login, logout, userName }}>
            {children}
        </AuthContext.Provider>
    );

}