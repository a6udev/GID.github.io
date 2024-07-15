import React from 'react';
import { motion } from 'framer-motion'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import Tours from '../components/tours';


function Home() {
    const { t } = useTranslation()
    const titles = [
        {
            h5Title: `${t('HomeH5title')}`,
            h1Title: `${t('HomeH1title')}`,
            desc: `${t('HomeDesc')}`
        },
        {
            h5Title: `${t('HomeH5title')}`,
            h1Title: `${t('HomeH1title')}`,
            desc: `${t('HomeDesc')}`
        },
        {
            h5Title: `${t('HomeH5title')}`,
            h1Title: `${t('HomeH1title')}`,
            desc: `${t('HomeDesc')}`
        },
        {
            h5Title: `${t('HomeH5title')}`,
            h1Title: `${t('HomeH1title')}`,
            desc: `${t('HomeDesc')}`
        },
        {
            h5Title: `${t('HomeH5title')}`,
            h1Title: `${t('HomeH1title')}`,
            desc: `${t('HomeDesc')}`
        }
    ]
    return (
        <>
            <div className="bg-[url('http://localhost:3000/img/bgMain.png')] rounded-b-[100px] bg-cover bg-center h-full mt-[-113px]">
                <div className="container mx-auto h-[1000px] flex justify-start items-center">
                    <div className='max-w-[1050px] bg-[#21212199] backdrop-blur-[1px] p-[80px] rounded-[64px] '>

                        <Swiper
                            pagination={true}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                            autoplay={{ delay: 5000 }}
                        >
                            {
                                titles.map(item => (
                                    <SwiperSlide>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.5,
                                                ease: [0, 0.71, 0.2, 1.01]
                                            }}
                                            className='flex flex-col items-start justify-start text-start gap-[25px]'>
                                            <>
                                                <h5 className='text-[20px] text-[#fff]'>
                                                    {item.h5Title}
                                                </h5>
                                                <h1 className='text-[64px] text-[#fff] font-[700] max-w-[890px] leading-[70.4px]'>
                                                    {item.h1Title}
                                                </h1>
                                                <p className='text-[20px] font-[400] text-[#ffffffc7] max-w-[890px] leading-[26px]'>
                                                    {item.desc}
                                                </p>
                                            </>
                                        </motion.div>
                                    </SwiperSlide>
                                ))
                            }
                            <button className='py-[12px] mt-[40px] px-[24px] bg-[#1083E6] text-[#fff] text-[20px] font-[500] rounded-[24px]'>{t('see')}</button>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className='w-full   mt-[100px] container mx-auto'>
                <Tours />
            </div>
        </>
    );

}

export default Home;
