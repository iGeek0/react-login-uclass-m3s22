import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState(null);

    const toggleLogin = ()=> {
        setIsLogin(!isLogin);
    }

    const login = (data) => {
        // que hacemos para establecer el login
    }

    const logout = () => {
        // que hacemos para establecer el logout
    }

    return (
        <AuthContext.Provider value={{isLogin, token, toggleLogin, setToken, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

}