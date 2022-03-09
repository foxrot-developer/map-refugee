import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';

const NavigationRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/registration' element={<Registration />}></Route>
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    )
}

export default NavigationRoutes;
