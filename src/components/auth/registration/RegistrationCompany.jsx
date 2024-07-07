import React from 'react';

function RegistrationCompany() {
  return (
    <div className="text-center w-1/2 flex flex-col px-[90px] justify-start items-center pt-10">
      <img className="w-30 h-14" src="/img/GID.png" alt="GID" />
      <div className="flex flex-col mt-7">
        <h1 className="text-4xl text-gray-900 font-bold">Регистрация</h1>
        <p className="text-lg text-gray-700 w-80 font-normal">Введите данные для создания аккаунта</p>
      </div>
      <div className="mt-7 w-full flex flex-col items-center">
        <input type="text" placeholder="Имя" className="mb-4 p-2 w-full" />
        <input type="text" placeholder="Email" className="mb-4 p-2 w-full" />
        <input type="password" placeholder="Пароль" className="mb-4 p-2 w-full" />
      </div>
      <button className="w-full my-[20px] py-[16px] rounded-[32px] bg-[#1083E6] active:bg-[#45a5f8e5]">
        Зарегистрироваться
      </button>
    </div>
  );
}

export default RegistrationCompany;
