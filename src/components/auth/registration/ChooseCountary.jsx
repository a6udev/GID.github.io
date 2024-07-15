import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../UI/Button';
import { useTranslation } from 'react-i18next';

function ChooseCountary() {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation()

    const back = (e) => {
        e.stopPropagation();
        navigate(-2);
    };
    const countries = [
        { id: 1, name: 'Uzbekistan', bgImage: "url('./img/uz.png')" },
        { id: 2, name: 'Kyrgyzstan', bgImage: "url('./img/kg.png')" }
    ]

    const seeCountary = (id, e) => {
        localStorage.setItem('countary', JSON.stringify(countries[id].name));
        e.stopPropagation();
        navigate('/modal/check', { state: { backgroundLocation: location.state?.backgroundLocation || location } });
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[20]" onClick={back}>
            <div onClick={(e) => e.stopPropagation()} className="w-[1600px] flex justify-between bg-white h-[800px] rouned-[128px] relative p-20">

                <div className='w-full '>
                    <div className='flex flex-col items-center justify-center text-center gap-[40px]'>
                        <img src="http://localhost:5173/img/GID.png" alt="" />

                        <div>
                            <h1 className='text-[40px] font-[700] '>{t('welcome')}</h1>
                            <p className='text-[20px] text-[#212121c2]'>{t('select')}</p>
                        </div>

                        <div className='flex justify-between gap-[40px]'>
                            {
                                countries.map((item, index) => (
                                    <div
                                        key={item.id}
                                        onClick={(e) => seeCountary(index, e)}
                                        style={{ backgroundImage: item.bgImage }}
                                        className="w-[740px] h-[300px] rounded-[32px] cursor-pointer group duration-300 bg-cover bg-center"
                                    >
                                        <div className='opacity-0 w-full h-full bg-[#1083E666] rounded-[32px] group-hover:opacity-100 flex justify-center items-center transition-all duration-300'>
                                            <button className='py-[14px] px-[24px] bg-[#1083E6] rounded-[24px] text-[#fff]'>{item.name}</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <Button className="absolute top-0 right-0 cursor-pointer p-6 bg-[#1083E6] rounded-full" onClick={back}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 8L8 24M8 8L24 24" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Button>
            </div>
        </div>
    );
}

export default ChooseCountary;
