import { InputPass, Input } from '../../UI/Input';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../../UI/Button';
import WithSocials from '../registration/WithSocials';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const geChooseCountary = (e) => {
    e.stopPropagation()
    navigate('/choosecountary', { state: { backgroundLocation: location.state?.backgroundLocation || location } })
  }

  return (
    <div className="text-center w-1/2 flex flex-col px-[90px] justify-start items-center pt-10">
      <img className="w-30 h-14" src="/img/GID.png" alt="GID" />

      <div className="flex flex-col mt-7">
        <h1 className="text-4xl text-gray-900 font-bold">Добро пожаловать</h1>
        <p className="text-lg text-gray-700 w-80 font-normal">Продолжить с Google или введите данные для входа</p>
      </div>

      <div className="mt-7 w-full flex flex-col items-center">
        <Input placeholder="Email" />
        <InputPass placeholder="Password" />
      </div>
      <div className='flex justify-end w-full gap-[120px] items-end mb-[10px]'>
        {/* <span>Неправильно введен логин или пароль</span> */}
        <Link to={'/forgotPassword'} className='underline text-[#1083E6]'>Забыли пароль</Link>
      </div>
      <Button className={'w-full my-[20px] py-[16px] rounded-[32px] bg-[#1083E6] active:bg-[#45a5f8e5]'}>
        Войти
      </Button>
      <div className='flex justify-between w-full items-center mb-[10px]'>
        <span>Вы еще не зарегистрировались?</span>
        <span onClick={geChooseCountary} className='underline text-[#1083E6]'>Создать аккаунт</span>
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
