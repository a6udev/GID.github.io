import React, { useState, useEffect } from 'react';
import { Input, InputPass } from '../../UI/Input';
import Button from '../../UI/Button';
import { useTranslation } from 'react-i18next';

const RegisterUser = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    city: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isFormFilled = Object.values(formData).every(value => value.trim() !== '');
    setIsFormValid(isFormFilled);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, city, password, confirmPassword } = formData;

    try {
      const response = await fetch('https://gitkg.prolabagency.com/api/v1/accounts/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName,
          email,
          city,
          password,
          country: 'Kyrgyzstan',
          adress: 'default address',
          phone: null,
          latitude: '0',
          longitude: '0',
          bids: {
            title: 'just client ',
            address: 'just client ',
            city: 'just client ',
            country: 'just client ',
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
        localStorage.setItem('token', JSON.stringify(data.token))
        localStorage.setItem('user', JSON.stringify(data))
      }

    } catch (error) {
      console.error('Registration error:', error.message);
      setErrors({ form: error.message || 'An error occurred during registration' });
    }
  };

  return (
    <div className="text-center w-1/2 flex flex-col px-[90px] justify-start items-center pt-0">
      <div className="flex flex-col mt-0 gap-[16px]">
        <h1 className="text-4xl text-gray-900 font-bold">{t('welcome')}</h1>
        <p className="text-lg text-gray-700 w-80 font-normal">{t('lets')}</p>
      </div>

      <form className='mt-[10px] w-full' onSubmit={handleSubmit}>
        <Input
          type='text'
          className={`w-full ${errors.fullName ? 'border-[red]' : ''}`}
          placeholder='ФИО*'
          name='fullName'
          value={formData.fullName}
          onChange={handleChange}
        />

        <div className='h-[20px]'>
          <p className={`${errors.fullName ? 'flex' : 'hidden'} text-red-500  flex justify-center items-center`}>{errors.fullName}</p>
        </div>


        <Input
          type='email'
          className={`w-full ${errors.email ? 'border-[red]' : ''}`}
          placeholder='Почта'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />

        <div className='h-[20px]'>
          <p className={`${errors.email ? 'flex' : 'hidden'} text-red-500  flex justify-center items-center`}>{errors.email}</p>
        </div>


        <Input
          type='text'
          className={`w-full ${errors.city ? 'border-[red]' : ''}`}
          placeholder='Город'
          name='city'
          value={formData.city}
          onChange={handleChange}
        />

        <div className='h-[20px]'>
          <p className={`${errors.city ? 'flex' : 'hidden'} text-red-500  flex justify-center items-center`}>{errors.city}</p>
        </div>


        <InputPass
          type='password'
          className={`w-full mb-0 ${errors.password ? 'border-[red]' : ''}`}
          placeholder='Пароль*'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />

        <div className='h-[20px]'>
          <p className={`${errors.password ? 'flex' : 'hidden'} text-red-500  flex justify-center items-center`}>{errors.password}</p>
        </div>


        <InputPass
          type='password'
          className={`w-full mb-0 ${errors.confirmPassword ? 'border-[red]' : ''}`}
          placeholder='Повторите пароль*'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <div className='h-[20px]'>
          <p className={`${errors.confirmPassword ? 'flex' : 'hidden'} text-red-500  flex justify-center items-center`}>{errors.confirmPassword}</p>
        </div>


        {errors.form && <p className="text-red-500">{errors.form}</p>}

        <Button type='submit' className={`w-full my-[20px] py-[16px] rounded-[32px] ${Object.keys(errors).length > 0 ? 'bg-red-500' : 'bg-[#1083E6]'} active:bg-[#45a5f8e5] ${!isFormValid ? 'opacity-50' : ''}`}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};

export default RegisterUser;
