import './App.css';
import bgImg from '../public/bg.png'
import Header from './components/Header';
import UserLogin from './components/UserLogin';

function App() {

  return (
    <div
      className='min-w-screen min-h-screen bg-cover bg-center flex justify-center items-center'
      style={{backgroundImage: `url(${bgImg})`}}>
      <Header></Header>
      <UserLogin></UserLogin>
    </div>
  )
}

export default App
