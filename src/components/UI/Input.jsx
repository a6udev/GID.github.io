import React, { useState } from 'react';
import { ShowSvg } from "../../../public/svg";
import { HideSvg } from './../../../public/svg/index';

export const InputPass = ({ placeholder, value, onChange, className }) => {
    const [passCurrect, setPassCurrect] = useState(false);

    const togglePasswordVisibility = () => {
        setPassCurrect(!passCurrect);
    };

    return (
        <div className="relative mb-4 w-full flex items-center gap-[10px] rounded-[32px] border-gray-300 border">
            <input
                type={passCurrect ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`p-2  rounded-[35px] outline-none py-[16px] px-[32px] w-full ${className}`}
            />
            {
                passCurrect
                    ?
                    <HideSvg onClick={togglePasswordVisibility} />
                    :
                    <ShowSvg
                        onClick={togglePasswordVisibility} />
            }
        </div>
    );
};

export const Input = ({ type = "text", placeholder, value, onChange, className }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`mb-4 p-2 border rounded-[32px] outline-none py-[16px] px-[32px] w-full border-gray-300 ${className}`}
    />
);

