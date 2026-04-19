import { useState } from 'react';
import { validateUserInputs } from '../utils/utils';
import Button from './Button';
import Input from './Input';
import type { IInputValidity } from '../interfaces/userInput.interface';

export default function UserLogin() {
    const [email, setEmail] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');
    const [inpValidity, updateInpValidity] = useState<IInputValidity>({
        validEmail: true,
        validPwd: true
    });

    function validateInp() {
        updateInpValidity(validateUserInputs(email, pwd))
    }

    return (
        <div className='
            h-max border-2 
            border-blue-300 
            bg-blue-300/40 
            backdrop-blur-xs 
            p-2 
            rounded-xl 
            mt-2 flex 
            flex-col 
            items-center'
        >
            <Input label='Email' initVal={email} OnChange={setEmail} isValid={inpValidity.validEmail} type='text' autoComplete='email'/>
            <Input label='Password' initVal={pwd} OnChange={setPwd} isValid={inpValidity.validPwd} type='password' autoComplete='current-password'/>
            <Button label='Login' onClick={validateInp}/>
            <a href="./" className='
                text-white 
                transition duration-100
                hover:text-blue-950'
            >Forgot Password</a>
        </div>
    );
}