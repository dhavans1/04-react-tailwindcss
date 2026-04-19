import logo from '/logo.png';

export default function Header() {
    return (
        <div className='flex justify-center'>
            <img src={logo} alt="Logo image" className='size-50'/>
        </div>
    );
}