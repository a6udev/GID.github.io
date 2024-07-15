import React from 'react'
import Button from '../../UI/Button'
import { GoogleLogo, FaceLogo } from '../../../../public/svg'
import { useTranslation } from 'react-i18next'

const WithSocials = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className='flex items-center gap-[10px]'>
                <span className='w-[240px] bg-[#21212133] h-[3px]'></span>
                <span>{t('or')}</span>
                <span className='w-[240px] bg-[#21212133] h-[3px]'></span>
            </div>

            <div className='flex justify-between gap-[20px]'>
                <Button className={'flex gap-[10px] py-[17px] px-[85px] border-2 border-[#1083E6] !text-[#1083E6] rounded-[32px] hover:bg-[#1083E633]'}>
                    <GoogleLogo />
                    Google
                </Button>

                <Button className={'flex gap-[10px] py-[17px] px-[85px] border-2 border-[#1083E6] !text-[#1083E6] rounded-[32px] hover:bg-[#1083E633]'}>
                    <FaceLogo />
                    Facebook
                </Button>
            </div>
        </>
    )
}

export default WithSocials
