import React, { useState } from 'react';
import { Input } from '../../UI/Input';
import Button from './../../UI/Button';
import { useNavigate, useLocation } from 'react-router-dom';

const SendCode = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://gitkg.prolabagency.com/api/v1/accounts/reset-password/get-code/${email}`, { method: 'POST', });

      if (response.ok) {
        setMessage('Код был отправлен на ваш адрес электронной почты.');
        setError('');

        setTimeout(() => {
          navigate('/modal/ChekCode', { state: { backgroundLocation: location.state?.backgroundLocation || location } });
        }, 2000);

      } else {
        const data = await response.json();
        setError(data.message || 'Произошла ошибка');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Произошла ошибка');
    }
  };

  const isFormValid = email.trim() !== '';

  const goRegister = (e) => {
    e.stopPropagation();
    navigate('/choosecountary', { state: { backgroundLocation: location.state?.backgroundLocation || location } });
  }

  return (
    <div className="text-center w-1/2 flex flex-col px-[90px] justify-start items-center pt-10">
      <img className="w-30 h-14" src="/img/GID.png" alt="GID" />

      <div className="flex flex-col mt-7">
        <h1 className="text-4xl text-gray-900 font-bold">Забыли пароль?</h1>
        <p className="text-lg text-gray-700 w-80 font-normal">Войдите с помощью кода подтверждения</p>
      </div>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mt-7 w-full flex flex-col items-center">
          <Input
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="w-full"
          />
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {message && <p className="text-green-500 mt-2 h-[20px]">{message}</p>}

        <Button
          type="submit"
          className={`w-full  py-[16px] rounded-[32px] bg-[#1083E6] active:bg-[#45a5f8e5] ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isFormValid}
        >
          Получить код
        </Button>
        <Button
          className="w-full my-[20px] !text-[#1083E6] py-[16px] rounded-[32px] border-2 border-[#1083E6] active:bg-[#45a5f8e5]"
          onClick={goRegister} // Go back in history
        >
          Назад к регистрации
        </Button>
      </form>
    </div>
  );
};

export default SendCode;
