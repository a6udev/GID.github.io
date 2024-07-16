import React from 'react'
import Select from '../UI/Select'
import Button from '../UI/Button';

const Organization = () => {
    const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ];


    const handleSelectChange = (selectedOption) => {
        console.log('Selected option:', selectedOption);
    };
    return (
        <>
            <div className='flex justify-between items-center mt-[100px]'>
                <h1 className='text-[64px] font-[700] text-[#212121]'>Турагенции</h1>
                <Select options={options} onChange={handleSelectChange} />
            </div>
            <div className='flex '>
                <div className='w-[420px] text-center h-[540px] border-r mt-[40px] py-[32px] px-[24px] border-[#21212180]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-[6px] bg-[#fff] rounded-[24px] w-max py-[14px] px-[12px]'>
                            <p className='text-[16px] font-[400]'>Рейтинг</p>
                            <img src="./svg/star.svg" alt="" />
                            <img src="./svg/star.svg" alt="" />
                            <img src="./svg/star.svg" alt="" />
                            <img src="./svg/star.svg" alt="" />
                        </div>
                        <p>( 27 туров )</p>
                    </div>

                    <img src="./img/orgCom.png" alt="" />

                    <div className='flex flex-col font-[600] text-[#212121] text-[28px]'>
                        <h1>Турагенция</h1>
                        <h1>Anex tour</h1>
                    </div>
                    <Button className={'py-[16px] px-[32px] mt-[30px] bg-[#1083E6] rounded-[32px]'}>Смотреть туры</Button>
                </div>
                <div className='w-[420px] text-center h-[540px] border-r mt-[40px] py-[32px] px-[24px] border-[#21212180]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-[6px] bg-[#fff] rounded-[24px] w-max py-[14px] px-[12px]'>
                            <p className='text-[16px] font-[400]'>Рейтинг</p>
                            <img src="./svg/star.svg" alt="" />
                            <img src="./svg/star.svg" alt="" />
                            <img src="./svg/star.svg" alt="" />
                            <img src="./svg/star.svg" alt="" />
                        </div>
                        <p>( 27 туров )</p>
                    </div>

                    <img src="./img/orgCom.png" alt="" />

                    <div className='flex flex-col font-[600] text-[#212121] text-[28px]'>
                        <h1>Турагенция</h1>
                        <h1>Anex tour</h1>
                    </div>
                    <Button className={'py-[16px] px-[32px] mt-[30px] bg-[#1083E6] rounded-[32px]'}>Смотреть туры</Button>
                </div>
                <div className='w-[420px] text-center h-[540px] border-r mt-[40px] py-[32px] px-[24px] border-[#21212180]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-[6px] bg-[#fff] rounded-[24px] w-max py-[14px] px-[12px]'>
                            <p className='text-[16px] font-[400]'>Рейтинг</p>
                            <img src="./svg/star.svg" alt="" />
                            <img src="./svg/star.svg" alt="" />
                            <img src="./svg/star.svg" alt="" />
                            <img src="./svg/star.svg" alt="" />
                        </div>
                        <p>( 27 туров )</p>
                    </div>

                    <img src="./img/orgCom.png" alt="" />

                    <div className='flex flex-col font-[600] text-[#212121] text-[28px]'>
                        <h1>Турагенция</h1>
                        <h1>Anex tour</h1>
                    </div>
                    <Button className={'py-[16px] px-[32px] mt-[30px] bg-[#1083E6] rounded-[32px]'}>Смотреть туры</Button>
                </div>
                <div className='w-[420px] text-center h-[540px] border-r mt-[40px] py-[32px] px-[24px] border-[#21212180]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-[6px] bg-[#fff] rounded-[24px] w-max py-[14px] px-[12px]'>
                            <p className='text-[16px] font-[400]'>Рейтинг</p>
                            <img src="./svg/star.svg" alt="" />
                            <img src="./svg/star.svg" alt="" />
                            <img src="./svg/star.svg" alt="" />
                            <img src="./svg/star.svg" alt="" />
                        </div>
                        <p>( 27 туров )</p>
                    </div>

                    <img src="./img/orgCom.png" alt="" />

                    <div className='flex flex-col font-[600] text-[#212121] text-[28px]'>
                        <h1>Турагенция</h1>
                        <h1>Anex tour</h1>
                    </div>
                    <Button className={'py-[16px] px-[32px] mt-[30px] bg-[#1083E6] rounded-[32px]'}>Смотреть туры</Button>
                </div>
            </div>
            <div className='flex w-full justify-center mt-[40px]'>
                <Button className={'py-[16px] px-[32px] rounded-[32px] border border-[#1083E6] !text-[#1083E6] hover:bg-[#1083E6] hover:!text-[#fff] duration-300'}>Все турагенты</Button>
            </div>
        </>
    )
}

export default Organization
