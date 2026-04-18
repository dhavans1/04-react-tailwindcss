import './App.css';
import bgImg from '../public/bg.png'
import Header from './components/Header';
import UserLogin from './components/UserLogin';

function App() {

  return (
    <div
      className='absolute inset-0 bg-cover bg-center flex justify-center items-center flex-col'
      style={{backgroundImage: `url(${bgImg})`}}>
      <Header></Header>
      <UserLogin></UserLogin>
    </div>
  )
}

export default App
