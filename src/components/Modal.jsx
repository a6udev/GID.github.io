import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './UI/Button';
import Login from './auth/login/Login';
import RegistrationCompany from './auth/registration/RegistrationCompany';
import Chek from './auth/registration/Chek';
import RegisterUser from './auth/registration/RegisterUser';
import ForPassword from './auth/forgotPass/SendCode'
import ChekCode from './auth/forgotPass/ChekCode'
import SendNewCode from './auth/forgotPass/SendNewPass'

function Modal() {
    const navigate = useNavigate();
    const location = useLocation();

    const back = (e) => {
        e.stopPropagation();
        navigate('/');
    };


    const isLogin = location.pathname === '/modal/login';
    const isChek = location.pathname === '/modal/check';
    const isRegisterUser = location.pathname === '/modal/RegisterUser';
    const isRegisterCompany = location.pathname === '/modal/RegisterCompany';
    const forgotPass = location.pathname === '/modal/forgotpassword'
    const chekcode = location.pathname === '/modal/ChekCode'
    const sendNewCode = location.pathname === '/modal/SendNewCode'

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[20]" onClick={back}>
            <div onClick={(e) => e.stopPropagation()} className="w-[1600px] flex justify-between bg-white h-[800px] rounded-[128px] relative p-20">
                <div>
                    <img src="http://localhost:3000/img/mountain.png" alt="Mountain" className="h-full rounded-[32px] w-full object-cover rounded-l-[32px]" />
                </div>

                {isLogin && <Login />}
                {isChek && <Chek />}
                {isRegisterUser && <RegisterUser />}
                {isRegisterCompany && <RegistrationCompany />}
                {forgotPass && <ForPassword />}
                {chekcode && <ChekCode />}
                {sendNewCode && <SendNewCode />}

                <Button className="absolute top-0 right-0 cursor-pointer p-6 bg-[#1083E6] rounded-full z-10" onClick={back}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 8L8 24M8 8L24 24" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Button>
            </div>
        </div>
    );
}

export default Modal;
