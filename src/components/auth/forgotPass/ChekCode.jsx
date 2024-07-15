import React, { useState } from 'react';
import Button from './../../UI/Button';
import { CircleInput } from './../../UI/Input';
import { useNavigate, useLocation } from 'react-router-dom';

const ChekCode = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const [success, setSuccess] = useState(false);
    const [active, setActive] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://gitkg.prolabagency.com/api/v1/accounts/reset-password/chek-code/${verificationCode}`, { method: 'POST' });

            if (response.status === 200) {
                setTimeout(() => {
                    navigate('/modal/SendNewCode', { state: { backgroundLocation: location.state?.backgroundLocation || location } });
                }, 2000);
                localStorage.setItem('codeUser', verificationCode)

                setSuccess(true);
                setActive(true);
            } else {
                setSuccess(false);
                setActive(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setSuccess(false);
            setActive(true);
        }
    };

    const handleChange = (index, value) => {
        const updatedCode = verificationCode.substring(0, index) + value + verificationCode.substring(index + 1);
        setVerificationCode(updatedCode);
    };

    const goSendCode = (e) => {
        e.stopPropagation();
        navigate('/modal/forgotpassword', { state: { backgroundLocation: location.state?.backgroundLocation || location } });
    };

    return (
        <div className="text-center w-1/2 flex flex-col px-[90px] justify-start items-center pt-10">
            <img className="w-30 h-14" src="/img/GID.png" alt="GID" />

            <div className="flex flex-col mt-7">
                <h1 className="text-center text-[36px] font-bold mt-4">Введите код</h1>
                <p className="text-center text-gray-500 mb-[24px]">Мы только что отправили код подтверждения на адрес PROlab@gmail.com</p>
            </div>

            <form className="w-full" onSubmit={handleSubmit}>

                <div>
                    <CircleInput handleChange={handleChange} />
                    <div className='w-full flex justify-center'>
                        {active && (
                            <p className={`text-${success ? '[green]' : '[red]'} flex`}>
                                {success ? 'Мы получили ваш код!' : 'Мы не получили ваш код'}
                            </p>
                        )}
                    </div>
                </div>

                <Button
                    onClick={() => setActive(true)}
                    type="submit"
                    className={`w-full mt-[20px] py-[16px] rounded-[32px]  active:bg-[#45a5f8e5] ${verificationCode !== '' ? 'bg-[#1083E6]' : 'bg-[#1082e6a0] cursor-not-allowed'}`}
                >
                    Подтвердить
                </Button>
                <Button
                    className="w-full my-[20px] !text-[#1083E6] py-[16px] rounded-[32px] border-2 border-[#1083E6] active:bg-[#45a5f8e5]"
                    onClick={goSendCode}
                >
                    Повторить отправку кода
                </Button>
            </form>
        </div>
    );
};

export default ChekCode;
