import React, { useEffect } from 'react';
import Button from './../UI/Button';
import { SearchLogo } from './../../../public/svg/index';
import { useTranslation } from 'react-i18next';
import Select from './../UI/Select';
import { useDispatch, useSelector } from 'react-redux';
import { getTours } from '../../redux/slices/tours/ToursSlice';

const Index = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data: tours, loading, error } = useSelector((state) => state.tours);

  useEffect(() => {
    dispatch(getTours('https://gitkg.prolabagency.com/api/v1/tours/'));
  }, [dispatch]);

  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  const handleSelectChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
  };

  console.log(tours);
  const defaultImage = 'https://media1.tenor.com/m/XQLVLptLIBEAAAAd/maes-b-lost-in-a-field.gif';

  const valuta = (prices) => {
    const currencyItem = prices.find(item => item.currency.code === 'сом');
    return currencyItem ? currencyItem.currency.code : 'unknown currency';
  };

  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[8px]'>
          <h1 className='mr-[32px] text-[64px] font-[700]'>Туры</h1>
          <Button className={'py-[14px] px-[24px] rounded-[24px] focus:bg-[#1083e6] focus:!text-[#fff] duration-300 bg-[#1083E61A] !text-[#1083E6]'}>На 1 день</Button>
          <Button className={'py-[14px] px-[24px] rounded-[24px] focus:bg-[#1083e6] focus:!text-[#fff] duration-300 bg-[#1083E61A] !text-[#1083E6]'}>Пеший</Button>
          <Button className={'py-[14px] px-[24px] rounded-[24px] focus:bg-[#1083e6] focus:!text-[#fff] duration-300 bg-[#1083E61A] !text-[#1083E6]'}>На транспорте</Button>
          <Button className={'py-[14px] px-[24px] rounded-[24px] focus:bg-[#1083e6] focus:!text-[#fff] duration-300 bg-[#1083E61A] !text-[#1083E6]'}>В моем городе</Button>
        </div>

        <div className='flex gap-[12px]'>
          <div className='flex items-center gap-[10px] py-[15px] px-[25px] bg-[#FFFFFF] rounded-[24px]'>
            <SearchLogo />
            <input className='outline-none placeholder-underline bg-transparent text-[#212121]' type="text" placeholder={t('Search')} />
          </div>

          <Select options={options} onChange={handleSelectChange} />

          <div className='bg-white p-[6px] rounded-[24px] flex gap-[8px] items-center'>
            <Button className={'bg-[#1083e6] p-[8px] rounded-[50%]'}>
              <img className='' src="./svg/menu.svg" alt="Icon 1" />
            </Button>
            <Button>
              <img src="./svg/map.svg" alt="Icon 2" />
            </Button>
          </div>
        </div>
      </div>

      {loading && <div>Loading...</div>}
      <div className='flex flex-wrap'>
        {tours?.results?.map((tour) => (
          <div key={tour.id} className='w-[420px] relative min-h-[300px] pb-[130px] py-[32px] px-[24px] border-r border-b border-[#21212180]'>
            <div className='relative'>
              <img
                src={tour.image || defaultImage}
                alt={tour.name || 'Tour Image'}
                className='rounded-[32px] h-[300px] object-cover w-full'
                onError={(e) => { e.target.onerror = null; e.target.src = defaultImage; }}
              />
              <Button className='rounded-[50%] absolute top-[16px] right-[16px] p-[12px] bg-[#fff] w-max'>
                <img src="/svg/like.svg" alt="" />
              </Button>
              <div className='py-[16px] absolute bottom-[16px] left-[16px] px-[24px] text-[#212121] w-max rounded-[24px] bg-[#fff]'>
                <span className='text-[14px] font-[400]'>{formatDate(tour.start_time)}</span>
              </div>
            </div>
            <div>
              <h1 className='text-[28px] font-[600] mt-[10px] w-[300px]'>{tour.name}</h1>
              <div className='flex flex-wrap gap-[7px] mt-[16px]'>
                {tour.tags.map((tag, index) => (
                  <Button key={index} className={'py-[8px] px-[16px] !text-[#1083E6] bg-[#1083E61A] rounded-[24px]'}>{tag.title}</Button>
                ))}
              </div>
            </div>

            <div className='flex justify-between items-center mt-[30px] absolute bottom-[27px] w-[90%]'>
              <div className='flex items-end h-[50px] relative w-[100px]'>
                <span className='text-[24px] font-[700] w-[75px] flex gap-[5px]'><b>{tour.price}</b> <i>{valuta(tour.prices)}</i></span>
                {/* <span className='line-through absolute top-0 right-0'>10</span> */}
              </div>

              <div className='flex gap-[8px] items-center'>
                <div className='py-[16px] px-[20px] border-[#1083E6] text-[#1083E6] flex items-center gap-[5px] rounded-[32px] border'>
                  <Button>
                    <img src="./svg/arrowLeft.svg" alt="" />
                  </Button>
                  <span>10</span>
                  <Button><img src="./svg/arrowRight.svg" alt="" /></Button>
                </div>

                <Button className={'bg-[#1083E6] py-[16px] px-[30px] rounded-[32px]'}>Купить</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
