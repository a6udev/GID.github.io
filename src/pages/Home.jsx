import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';

function Home() {
    return (
        <div className="bg-[url('http://localhost:5173/img/bgMain.png')] rounded-b-[100px] bg-cover bg-center h-full">
            <div className="container mx-auto h-[1000px] flex justify-start items-center">
                <div className='max-w-[1050px] bg-[#21212199] backdrop-blur-[1px] p-[80px] rounded-[64px] '>

                    <Swiper
                        pagination={true}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                        autoplay={{ delay: 2000 }}
                    >
                        <SwiperSlide>
                            <div className='flex flex-col items-start justify-start text-start gap-[25px]'>
                                <h5 className='text-[20px] text-[#fff]'>
                                    Бронируйте свой тур прямо сейчас!
                                </h5>
                                <h1 className='text-[64px] text-[#fff] font-[700] max-w-[890px] leading-[70.4px]'>
                                    Туры по горним ущельям с 20% скидкой только на этих выходных
                                </h1>
                                <p className='text-[20px] font-[400] text-[#ffffffc7] max-w-[890px] leading-[26px]'>
                                    Не упустите возможность окунуться в атмосферу приключений по самым выгодным ценам! Бронируйте свой тур прямо сейчас!
                                </p>
                                <button className='py-[12px] mt-[40px] px-[24px] bg-[#1083E6] text-[#fff] text-[20px] font-[500] rounded-[24px]  '>Смотреть</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-start justify-start text-start gap-[25px]'>
                                <h5 className='text-[20px] text-[#fff]'>
                                    Бронируйте свой тур прямо сейчас!
                                </h5>
                                <h1 className='text-[64px] text-[#fff] font-[700] max-w-[890px] leading-[70.4px]'>
                                    Туры по горним ущельям с 20% скидкой только на этих выходных
                                </h1>
                                <p className='text-[20px] font-[400] text-[#ffffffc7] max-w-[890px] leading-[26px]'>
                                    Не упустите возможность окунуться в атмосферу приключений по самым выгодным ценам! Бронируйте свой тур прямо сейчас!
                                </p>
                                <button className='py-[12px] mt-[40px] px-[24px] bg-[#1083E6] text-[#fff] text-[20px] font-[500] rounded-[24px]  '>Смотреть</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-start justify-start text-start gap-[25px]'>
                                <h5 className='text-[20px] text-[#fff]'>
                                    Бронируйте свой тур прямо сейчас!
                                </h5>
                                <h1 className='text-[64px] text-[#fff] font-[700] max-w-[890px] leading-[70.4px]'>
                                    Туры по горним ущельям с 20% скидкой только на этих выходных
                                </h1>
                                <p className='text-[20px] font-[400] text-[#ffffffc7] max-w-[890px] leading-[26px]'>
                                    Не упустите возможность окунуться в атмосферу приключений по самым выгодным ценам! Бронируйте свой тур прямо сейчас!
                                </p>
                                <button className='py-[12px] mt-[40px] px-[24px] bg-[#1083E6] text-[#fff] text-[20px] font-[500] rounded-[24px]  '>Смотреть</button>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Home;
