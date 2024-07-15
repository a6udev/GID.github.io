import React, { useRef, useState } from 'react';
import { ShowSvg } from "../../../public/svg"; // Assuming your SVG components are correctly imported
import { HideSvg } from './../../../public/svg/index';

export const InputPass = ({ placeholder, value, onChange, className, name }) => {
    const [passVisible, setPassVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPassVisible(!passVisible);
    };

    return (
        <div className="relative mb-4 w-full flex items-center gap-[10px] pr-[10px] rounded-[32px] border-gray-300 border">
            <input
                type={passVisible ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                required
                className={`p-2 rounded-[35px] outline-none py-[16px] px-[32px] w-full ${className}`}
            />
            {
                passVisible
                    ? <HideSvg onClick={togglePasswordVisibility} />
                    : <ShowSvg onClick={togglePasswordVisibility} />
            }
        </div>
    );
};

export const Input = ({ type = "text", placeholder, value, onChange, className, name }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required
        className={`mb-0 p-2 border rounded-[32px] outline-none py-[16px] px-[32px] w-full border-gray-300 ${className}`}
    />
);


export const CircleInput = ({ handleChange, handleKeyPress }) => {
    const inputRefs = Array.from({ length: 4 }).map(() => useRef(null));

    const handleChangeInternal = (index, value) => {
        if (value.length > 1) {
            value = value.slice(0, 1);
        }
        handleChange(index, value);
        if (index < inputRefs.length - 1 && value) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyPressInternal = (index, e) => {
        if (e.key === 'Backspace' && index > 0) {
            handleChange(index, '');
            inputRefs[index - 1].current.focus();
            inputRefs[index - 1].current.value = '';
        } else if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex space-x-2">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="relative">
                        <input
                            type="text"
                            maxLength="1"
                            id={`input-${index}`}
                            className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                            onChange={(e) => handleChangeInternal(index, e.target.value)}
                            onKeyDown={(e) => handleKeyPressInternal(index, e)}
                            ref={inputRefs[index]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

