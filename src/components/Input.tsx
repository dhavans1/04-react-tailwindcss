import React from "react";

type InputProps = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({label, ...props}: InputProps) {
    return (
        <div className='w-3xs h-20 mt-2 flex flex-col'>
            <label
                className='text-left font-bold font-mono text-white'
                htmlFor={label}
            >{label}
            </label>
            <input 
                id={label}
                {...props}
                className='
                    h-12 
                    bg-blue-950/60
                    rounded-2xl 
                    p-4
                    focus:bg-amber-400/20
                    focus:border-yellow-300
                    focus:text-black'
            />
        </div>
    );
}