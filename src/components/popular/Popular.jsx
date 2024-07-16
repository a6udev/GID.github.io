import React from 'react'

const Popular = () => {
    return (
        <div className='bg-[#1083E6] mt-[100px] p-[80px] rounded-[64px]'>
            <img src="./img/GID.png" alt="" />
            <div className='mt-[40px] flex gap-[40px]'>
                <div>
                    <img className='w-[970px] h-[336px] object-cover rounded-[32px]' src="./img/tashkent.jpeg" alt="" />
                </div>
                <div className='flex flex-col gap-[28px] items-start'>
                    <h1 className='text-[40px] font-[700] w-[510px]'>Туры по горним ущельям с 20% скидкой только на этих выходных</h1>
                    <p className='w-[510px]'>Не упустите возможность окунуться в атмосферу приключений по самым выгодным ценам! Бронируйте свой тур прямо сейчас!</p>
                    <button className='!text-[#1083E6] py-[16px] px-[32px] rounded-[32px] text-[16px] bg-[#fff]'>Купит</button>
                </div>
            </div>
        </div>
    )
}

export default Popular
