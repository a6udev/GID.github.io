import React, { useState } from 'react';
import { Reg } from '../../../../public/svg';
import { Input, InputPass } from '../../UI/Input';
import Button from '../../UI/Button';
import { useNavigate } from 'react-router-dom';

const RegistrationCompany = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    full_name: '',
    email: '',
    phone: '',
    city: '',
    adress: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormValidFull, setIsFormValidFull] = useState(false);

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Название is required';
    if (!formData.full_name.trim()) newErrors.full_name = 'ФИО is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim() || !/^\+?[1-9]\d{1,14}$/.test(formData.phone)) newErrors.phone = 'Valid phone number is required';
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.adress.trim()) newErrors.adress = 'Адрес is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const step1Errors = validateStep1();
    if (Object.keys(step1Errors).length > 0) {
      setErrors(step1Errors);
    } else {
      setActive(true);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const step2Errors = validateStep2();
    if (Object.keys(step2Errors).length > 0) {
      setErrors(step2Errors);
    } else {
      try {
        const response = await fetch('https://gitkg.prolabagency.com/api/v1/accounts/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name: formData.full_name,
            country: 'KG',
            city: formData.city,
            adress: formData.adress,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
            latitude: '0',
            longitude: '0',
            bids: {
              title: formData.title,
              address: formData.adress,
              city: formData.city,
              country: 'KG',
              latitude: '0',
              longitude: '0'
            }
          })
        });

        const data = await response.json();

        if (response.status === 400) {
          const apiErrors = {};
          Object.keys(data).forEach((key) => {
            apiErrors[key] = data[key];
          });
          setErrors(apiErrors);
        } else {
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('user', JSON.stringify(data));
          setOpen((prev) => !prev)
        }
      } catch (error) {
        console.error('Registration error:', error.message);
        setErrors({ form: error.message || 'An error occurred during registration' });
      }
    }
  };

  React.useEffect(() => {
    const isFormFilled = formData.title.trim() !== '' && formData.full_name.trim() !== '' && formData.email.trim() !== '' && formData.phone.trim() !== '';
    const isFormFilledFull = Object.values(formData).every(value => value.trim() !== '');

    setIsFormValid(isFormFilled);
    setIsFormValidFull(isFormFilledFull)
  }, [formData]);

  return (
    <div className="text-center w-1/2 flex flex-col px-[90px] justify-start items-center pt-5">
      <div className="flex flex-col mt-0 gap-[16px] items-center">
        <h1 className="text-4xl text-gray-900 font-bold">Добро пожаловать</h1>
        <p className="text-lg text-gray-700 w-80 font-normal">Давайте заполним немножко форм и пойдем искать туры для себя</p>
        <Reg active={active} />
      </div>

      <form className='w-full mt-[44px]'>
        <div className={`${active ? 'hidden' : 'flex flex-col'}`}>
          <Input
            placeholder={'Название'}
            name={'title'}
            value={formData.title}
            onChange={handleChange}
            className={`w-full ${errors.title ? 'border-red-500' : ''}`}
          />

          <div className='h-[20px]'>
            <p className={`${errors.title ? 'flex' : 'hidden'} text-red-500  flex justify-center items-center`}>{errors.title}</p>
          </div>

          <Input
            placeholder={'ФИО*'}
            name={'full_name'}
            value={formData.full_name}
            onChange={handleChange}
            className={`w-full ${errors.full_name ? 'border-red-500' : ''}`}
          />

          <div className='h-[20px]'>
            {<p className={`${errors.full_name ? 'flex' : 'hidden'} text-red-500  flex justify-center items-center`}>{errors.full_name}</p>}
          </div>
          <Input
            placeholder={'email'}
            name={'email'}
            value={formData.email}
            onChange={handleChange}
            className={`w-full ${errors.email ? 'border-red-500' : ''}`}
          />
          <div className='h-[20px]'>
            {<p className={`${errors.email ? 'flex' : 'hidden'} text-red-500  flex justify-center items-center`}>{errors.email}</p>}

          </div>
          <Input
            placeholder={'phone'}
            name={'phone'}
            value={formData.phone}
            onChange={handleChange}
            className={`w-full ${errors.phone ? 'border-red-500' : ''}`}
          />
          <div className='h-[20px]'>
            {<p className={`${errors.phone ? 'flex' : 'hidden'} text-red-500  flex justify-center items-center`}>{errors.phone}</p>}
          </div>
          <Button className={`w-full bg-[#1083E6] py-[17px] rounded-[32px] ${!isFormValid ? 'bg-[#1082e6a7] cursor-not-allowed' : ''}`} onClick={handleContinue}>Продолжить</Button>
        </div>

        <div className={`${active ? 'flex flex-col' : 'hidden'}`}>
          <Input
            placeholder={'city'}
            name={'city'}
            value={formData.city}
            onChange={handleChange}
            className={`w-full ${errors.city ? 'border-red-500' : ''}`}
          />
          <div className='h-[20px]'>
            {<p className={`${errors.phone ? 'flex' : 'hidden'} text-red-500  flex justify-center items-center`}>{errors.city}</p>}
          </div>

          <Input
            placeholder={'Местоположение( Адрес)*'}
            name={'adress'}
            value={formData.adress}
            onChange={handleChange}
            className={`w-full ${errors.adress ? 'border-red-500' : ''}`}
          />
          <div className='h-[20px]'>
            {<p className={`${errors.phone ? 'flex' : 'hidden'} text-red-500  flex justify-center items-center`}>{errors.address}</p>}
          </div>

          <InputPass
            placeholder='Пароль*'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className={`w-full ${errors.password ? 'border-red-500' : ''}`}
          />
          <div className='h-[20px]'>
            {<p className={`${errors.phone ? 'flex' : 'hidden'} text-red-500  flex justify-center items-center`}>{errors.password}</p>}
          </div>

          <InputPass
            placeholder='Повторите пароль*'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full ${errors.confirmPassword ? 'border-red-500' : ''}`}
          />
          <div className='h-[20px]'>
            {<p className={`${errors.phone ? 'flex' : 'hidden'} text-red-500  flex justify-center items-center`}>{errors.confirmPassword}</p>}
          </div>

          <Button className={`w-full py-[17px] rounded-[32px] ${isFormValidFull ? 'bg-[#1083E6]' : 'bg-[#1082e6a5] cursor-not-allowed'}`} onClick={handleSubmit}>Отправить на проверку</Button>
        </div>
      </form>

      <div className={`${open ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-[100vh] bg-[#1082e63e] z-[100]  justify-center items-center backdrop-blur-[5px]`}>
        <div className='p-[80px] flex flex-col items-center bg-[#fff] rounded-[32px]'>
          <h1 className='text-[36px] font-[700]'>Ваша заявка отправлена</h1>
          <p className='text-[16px] text-[#212121] w-[430px] font-[400]'>В ближайшое время с вами свяжется наш менеджер для потверждения данных</p>
          <Button className={'mt-[28px] bg-[#1083E6] px-[130px] py-[16px] rounded-[32px] hover:bg-[#1082e6ab]'} onClick={() => navigate('/')}>Вернутся на сайт</Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCompany;
