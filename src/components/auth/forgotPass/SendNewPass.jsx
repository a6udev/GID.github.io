import React, { useState } from 'react';
import Button from './../../UI/Button';
import { Input, InputPass } from './../../UI/Input';
import { useNavigate, useLocation } from 'react-router-dom';

const SendNewPass = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false)
    const code = localStorage.getItem('codeUser');
    const navigate = useNavigate();
    const location = useLocation()
    const allInputsValud = newPassword !== '' && confirmPassword !== ''

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setMessage('Пароли не совпадают');
            return;
        }

        try {
            const response = await fetch(`https://gitkg.prolabagency.com/api/v1/accounts/reset-password/send-code/${code}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password: newPassword, password_confirm: confirmPassword }),
            });

            if (response.status === 200) {
                setMessage('Пароль успешно обновлен');
                setOpen(true)
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || 'Ошибка обновления пароля');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Ошибка обновления пароля');
        }
    };

    const goLogin = (e) => {
        e.stopPropagation()
        navigate('/modal/login', { state: { backgroundLocation: location.state?.backgroundLocation || location } })
    }

    return (
        <div className="text-center w-1/2 flex flex-col px-[90px] justify-start items-center pt-10">
            <img className="w-30 h-14" src="/img/GID.png" alt="GID" />

            <div className="flex flex-col mt-7">
                <h1 className="text-center text-[36px] font-bold mt-4">Новый пароль</h1>
                <p className="text-center text-gray-500 mb-[24px]">Теперь напишите свой новый пароль</p>
            </div>

            <form className="w-full" onSubmit={handleSubmit}>
                <div>
                    <InputPass
                        placeholder={'Новый пароль'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="password"
                    />
                    <InputPass
                        placeholder={'Повторите пароль'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                    />
                </div>

                {message && <p className={`text-${message.includes('успешно') ? 'green' : 'red'}-500 mt-4`}>{message}</p>}

                <Button
                    type="submit"
                    className={`w-full mt-[20px] py-[16px] rounded-[32px]  active:bg-[#45a5f8e5] ${allInputsValud ? 'bg-[#1083E6]' : 'bg-[#1082e69c] cursor-not-allowed'}`}
                >
                    Подтвердить
                </Button>
            </form>

            <div className={`${open ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-[100vh] bg-[#1082e63e] z-[100]  justify-center items-center backdrop-blur-[5px]`}>
                <div className='p-[80px] flex flex-col items-center bg-[#fff] rounded-[32px]'>
                    <h1 className='text-[36px] font-[700]'>Ваш пароль обновлен</h1>
                    <p className='text-[16px] text-[#212121] w-[430px] font-[400]'>Давайте снова логин</p>
                    <Button className={'mt-[28px] bg-[#1083E6] px-[130px] py-[16px] rounded-[32px] hover:bg-[#1082e6ab]'} onClick={goLogin}>Вернутся на login</Button>
                </div>
            </div>
        </div>
    );
};

export default SendNewPass;
