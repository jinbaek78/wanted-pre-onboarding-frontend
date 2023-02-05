import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate('/signin');
  };
  const handleSignupClick = () => {
    navigate('/signup');
  };
  return (
    <div className="p-5 mt-5">
      <header className=" border-b border-b-zinc-300 mb-5 pb-4">
        <div className="text-white">
          <button
            className="w-15 h-15 bg-[#7bcaff] text-2xl mr-2"
            onClick={handleSigninClick}
          >
            <p>로그인</p>
          </button>
          <button
            className="w-15 h-15 bg-[#7bcaff] text-2xl"
            onClick={handleSignupClick}
          >
            <p>회원가입</p>
          </button>
        </div>
      </header>
      <h1>투두 리스트를 이용하기 위해서는 로그인이 필요해요</h1>
    </div>
  );
}

export default App;
