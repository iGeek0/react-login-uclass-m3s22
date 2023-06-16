
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';


function Menu() {
    const { isLogin, toggleLogin} = useContext(AuthContext);
    let publicMenu = () => {
        return (
            <header className='header'>
                <div className="nav-wrapper">
                    <div className="header-side-1">
                        <NavLink to="/home"> CafeMX</NavLink>
                        <NavLink to="/products">Productos</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/signup">Signup</NavLink>
                    </div>
                    <div className="header-side-2">
                        <NavLink to="/login">Login</NavLink>
                    </div>
                </div>
            </header>
        )
    }

    let privateMenu = () => {
        return (
            <header className='header'>
                <div className="nav-wrapper">
                    <div className="header-side-1">
                        <NavLink to="/home"> CafeMX</NavLink>
                        <NavLink to="/products">Productos</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </div>
                    <div className="header-side-2">
                        <NavLink to="/checkout"><BsFillCartFill /></NavLink>
                        <NavLink to="/profile" style={{ "textDecoration": "underline" }}>Sample name</NavLink>
                        <button className='btn btn-light btn-sm ms-2' onClick={toggleLogin}>Logout</button>
                    </div>
                </div>
            </header>
        )
    }

    return (
        <>
            {
                isLogin ? (privateMenu()) : (publicMenu())
            }
        </>
    );
}

export default Menu;