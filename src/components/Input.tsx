import React, { useState } from "react";

type InputProps = {
    label: string;
    initVal: string;
    isValid: boolean;
    OnChange: (val: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const errorStyle = 'font-semibold text-xs text-red-500 text-left pl-1 pt-0.5';

export default function Input({label, initVal, isValid, OnChange, ...props}: InputProps) {
    const [inpVal, setInpVal] = useState<string>(initVal);

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInpVal(e.target.value);
        OnChange(e.target.value);
    }

    return (
        <div className='w-3xs h-20 mt-2 mb-2 flex flex-col'>
            <label
                className='text-left font-bold font-mono text-white pl-1'
                htmlFor={label}
            >{label}
            </label>
            <input 
                onChange={handleInput}
                id={label}
                defaultValue={inpVal}
                {...props}
                className='
                    h-12 
                    bg-blue-950/60
                    rounded-2xl 
                    p-4
                    text-white
                    focus:bg-amber-400/20
                    focus:border-yellow-300
                    focus:text-black'
            />
            {
                !isValid && !inpVal?.length && <span className={errorStyle}>Please provide {label}</span>
            }
            {
                !isValid && !!inpVal?.length && <span className={errorStyle}>Invalid {label}</span>
            }
        </div>
    );
}