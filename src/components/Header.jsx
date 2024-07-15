import React from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
import { SearchLogo, UserSvg } from '../../public/svg';
import Button from './UI/Button';
import { useTranslation } from 'react-i18next';
import i18n from '../i18next';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const getToken = localStorage.getItem('token');
    const { t } = useTranslation()

    const openModal = () => {
        navigate('/modal/login', { state: { backgroundLocation: location } });
    };

    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <header className='sticky w-full z-[20]'>
            <motion.nav
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="container mx-auto flex justify-between py-[28px]">
                <div className='flex gap-[154px] items-center'>
                    <motion.img src="/img/GID.png" alt="" />
                    <div className='flex gap-[40px] items-center text-[16px] font-[400]'>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#212121]' : 'text-[#21212194]'} to={'/'}>{t('Home')}</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#212121]' : 'text-[#21212194]'} to={'/tours'}>{t('Tours')}</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#212121]' : 'text-[#21212194]'} to={'/organizations'}>{t('Organizations')}</NavLink>
                        <div className='flex items-center gap-[10px] py-[15px] px-[25px] bg-[#FFFFFF] rounded-[24px]'>
                            <SearchLogo />
                            <input className='outline-none placeholder-underline bg-transparent text-[#212121]' type="text" placeholder={t('Search')} />
                        </div>
                    </div>
                </div>
                <div className='flex gap-[20px] items-center '>
                    <div className='bg-[#fff] flex gap-[4px] py-[14px] px-[20px] rounded-[24px] text-[16px]'>
                        <button onClick={() => changeLang('kg')} className={`${i18n.language === 'kg' && 'text-[#1083E6]'}`}>Kg</button>
                        <span>/</span>
                        <button onClick={() => changeLang('ru')} className={`${i18n.language === 'ru' && 'text-[#1083E6]'}`}>Ru</button>
                        <span>/</span>
                        <button onClick={() => changeLang('en')} className={`${i18n.language === 'en' && 'text-[#1083E6]'}`}>En</button>
                        <span>/</span>
                        <button onClick={() => changeLang('uz')} className={`${i18n.language === 'uz' && 'text-[#1083E6]'}`}>Uz</button>
                    </div>

                    {
                        getToken
                            ?
                            <div className='flex gap-[22px] items-center'>

                                <Button className={'bg-[#1083E6] px-[26px] py-[18px] rounded-[24px]'}>
                                    <UserSvg />
                                </Button>

                                <Button className={'text-[18px] font-[400] !text-[#000] bg-[#fff] py-[12px] px-[22px] rounded-[32px]'}>
                                    {t('lagout')}
                                </Button>

                            </div>
                            :
                            <button onClick={openModal} className='bg-[#fff] py-[14px] px-[24px] rounded-[24px] text-[18px] font-[500]'>
                                {t('register') + ' / ' + t('login')}
                            </button>
                    }
                </div>
            </motion.nav>
        </header>
    );
}

export default Header;
