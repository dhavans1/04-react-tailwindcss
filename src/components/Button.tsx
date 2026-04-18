import React from "react";

type btnProps = {
    label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({label, ...props}: btnProps) {
    return (
        <button
            {...props}
            className='
                h-10
                w-20
                bg-blue-950/80
                text-blue-100
                border-2 
                border-blue-900/50 
                rounded-2xl 
                mt-4 
                mb-1
                transition-all duration-300
                hover:bg-orange-500/80
                hover:cursor-pointer
                hover:text-blue-950'>
            {label}
        </button>
    );
}