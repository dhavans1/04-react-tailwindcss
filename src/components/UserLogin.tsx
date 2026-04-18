import Button from './Button';
import Input from './Input';

export default function UserLogin() {
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
            <Input label='Username' type='text'/>
            <Input label='Password' type='password'/>
            <Button label='Login'/>
            <a href="./" className='
                text-white 
                transition duration-100
                hover:text-blue-950'
            >Forgot Password</a>
        </div>
    );
}