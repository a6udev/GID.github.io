import { useState } from 'react';
import { InputPass, Input } from '../../UI/Input';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../UI/Button';
import WithSocials from '../registration/WithSocials';
import { useTranslation } from 'react-i18next';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('')
  const { t } = useTranslation()
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://gitkg.prolabagency.com/api/v1/accounts/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: email, password }),
      });


      const data = await response.json();


      if (response.status == 200) {
        localStorage.setItem('token', JSON.stringify(data.token))
      } else {
        setErrors(data)
      }

    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const geChooseCountary = (e) => {
    e.stopPropagation();
    navigate('/choosecountary', {
      state: { backgroundLocation: location.state?.backgroundLocation || location },
    });
  };

  const goResetPass = (e) => {
    e.stopPropagation();
    navigate('/modal/forgotpassword', {
      state: { backgroundLocation: location.state?.backgroundLocation || location },
    });
  };

  return (
    <div className="text-center w-1/2 flex flex-col px-[90px] justify-start items-center pt-5">
      <img className="w-30 h-14" src="/img/GID.png" alt="GID" />

      <div className="flex flex-col mt-7">
        <h1 className="text-4xl text-gray-900 font-bold">{t('welcome')}</h1>
        <p className="text-lg text-gray-700 w-80 font-normal">{t('continueWG')}</p>
      </div>

      <form
        onSubmit={handleLogin}
        className="mt-7 w-full flex flex-col items-center">
        <Input
          type='email'
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={'mb-[20px]'}
        />
        <InputPass
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className='flex justify-end w-full gap-[120px] items-end mb-[10px]'>
          <span onClick={goResetPass} className='cursor-pointer underline text-[#1083E6]'>{t('Forgotpassword')}</span>
        </div>

        <p className='text-[red] text-[18px] font-[700] h-[20px]'>{errors?.detail}</p>

        <Button
          type={'submit'}
          className={'w-full my-[20px] py-[16px] rounded-[32px] bg-[#1083E6] active:bg-[#45a5f8e5]'}

        >
          {t('login')}
        </Button>
      </form>

      <div className='flex justify-between w-full items-center mb-[10px]'>
        <span>{t('notReg')}</span>
        <span onClick={geChooseCountary} className='underline text-[#1083E6] cursor-pointer'>{t('createAcc')}</span>
      </div>

      <WithSocials />

      <Button className="absolute top-0 right-0 cursor-pointer p-6 bg-[#1083E6] rounded-full" onClick={() => navigate(-1)}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8L8 24M8 8L24 24" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Button>
    </div>
  );
}

export default Login;
