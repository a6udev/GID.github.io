import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './UI/Button';
import Login from './auth/login/Login';
import RegistrationCompany from './auth/registration/RegistrationCompany';
import Chek from './auth/registration/Chek';
import RegisterUser from './auth/registration/RegisterUser';

function Modal() {
    const navigate = useNavigate();
    const location = useLocation();

    const back = (e) => {
        e.stopPropagation();
        navigate(-1);
    };

    const isLogin = location.pathname === '/modal/login';
    const isChek = location.pathname === '/modal/check';
    const isRegisterUser = location.pathname === '/modal/RegisterUser';
    const isRegisterCompany = location.pathname === '/modal/RegisterCompany';

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-100" onClick={back}>
            <div onClick={(e) => e.stopPropagation()} className="w-[1600px] flex justify-between bg-white h-[800px] rounded-[128px] relative p-20">
                <div>
                    <img src="http://localhost:5173/img/mountain.png" alt="Mountain" className="h-full w-full object-cover rounded-l-[32px]" />
                </div>
                {isLogin && <Login />}
                {isChek && <Chek />}
                {isRegisterUser && <RegisterUser />}
                {isRegisterCompany && <RegistrationCompany />}
            </div>
        </div>
    );
}

export default Modal;
