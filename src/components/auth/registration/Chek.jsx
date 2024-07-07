import React, { useState } from 'react';
import Button from '../../UI/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import WithSocials from './WithSocials';

const Chek = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const [variant, setVariant] = useState('');

    const variants = [
        { id: 1, name: 'Пользователь', bgImage: "url('/img/user.jpeg')" },
        { id: 2, name: 'Компания', bgImage: "url('/img/company.png')" }
    ];

    const choose = (index) => {
        setVariant(variants[index].name);
    };

    const goRegister = (e) => {
        e.stopPropagation();
        if (variant === 'Компания') {
            navigate('/modal/RegisterCompany', { state: { backgroundLocation: location } });
        } else {
            navigate('/modal/RegisterUser', { state: { backgroundLocation: location } });
        }
    };

    return (
        <div className="text-center w-1/2 flex flex-col px-[90px] justify-start items-center pt-10">
            <img className="w-30 h-14" src="/img/GID.png" alt="GID" />
            <div className="flex flex-col mt-7">
                <h1 className="text-4xl text-gray-900 font-bold">Регистрация</h1>
                <p className="text-lg text-gray-700 w-80 font-normal">Продолжить с Google или введите данные для регистрации</p>
            </div>
            <div className='flex gap-[10px] mt-[24px]'>
                {variants.map((item, index) => (
                    <div
                        key={item.id}
                        style={{ backgroundImage: item.bgImage }}
                        onClick={() => choose(index)}
                        className={`w-[236px] h-[200px] rounded-[32px] cursor-pointer group duration-300 bg-cover bg-center ${variant === item.name ? 'border-4 border-[#1083E6]' : ''}`}
                        tabIndex="0"
                    >
                        <div className={`text-[#fff] text-[20px] w-full h-full rounded-[32px] flex justify-center items-center transition-all duration-300 ${variant === item.name ? 'bg-[#1083E6] opacity-100' : 'bg-[#1083E666] opacity-0 group-hover:opacity-100 group-focus:opacity-100'}`}>
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
            <Button onClick={goRegister} className={'w-full my-[20px] py-[16px] rounded-[32px] bg-[#1083E6]'}>Войти</Button>
            <WithSocials />
            <Button className="absolute top-0 right-0 cursor-pointer p-6 bg-[#1083E6] rounded-full" onClick={() => navigate(-3)}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 8L8 24M8 8L24 24" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Button>
        </div>
    );
};

export default Chek;
