import React from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { SearchLogo } from '../../public/svg';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const openModal = () => {
        navigate('/modal/login', { state: { backgroundLocation: location } });
    };

    return (
        <header className='fixed top-0 left-0 w-full'>
            <nav className="container mx-auto flex justify-between pt-[28px]">
                <div className='flex gap-[154px] items-center'>
                    <img src="http://localhost:5173/img/GID.png" alt="" />
                    <div className='flex gap-[40px] items-center text-[16px] font-[400]'>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#212121]' : 'text-[#21212194]'} to={'/'}>Главная</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#212121]' : 'text-[#21212194]'} to={'/tours'}>Туры</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#212121]' : 'text-[#21212194]'} to={'/organizations'}>Огранизации</NavLink>
                        <div className='flex items-center gap-[10px] py-[15px] px-[25px] bg-[#FFFFFF] rounded-[24px]'>
                            <SearchLogo />
                            <input className='outline-none placeholder-underline bg-transparent text-[#212121]' type="text" placeholder='Поиск' />
                        </div>
                    </div>
                </div>
                <div className='flex gap-[20px] items-center '>
                    <div className='bg-[#fff] flex gap-[4px] py-[14px] px-[20px] rounded-[24px] text-[16px]'>
                        <button>Kg</button>
                        <span>/</span>
                        <button>Ru</button>
                        <span>/</span>
                        <button>En</button>
                        <span>/</span>
                        <button>Uz</button>
                    </div>
                    <button onClick={openModal} className='bg-[#fff] py-[14px] px-[24px] rounded-[24px] text-[18px] font-[500]'>
                        Регистрация / Войти
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
