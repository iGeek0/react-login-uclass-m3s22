import {Route, Routes, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';



function AppRouter() {
    return (
    <Routes>
        <Route path='/home' element={<Home/>}/>

        <Route path="/" element={<Navigate to="home"/>}/>
    </Routes>
    );
}

export default AppRouter;