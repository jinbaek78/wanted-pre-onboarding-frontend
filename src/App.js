import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="p-5 mt-5">
      <Header />
      <h1 className="text-xl">
        투두 리스트를 이용하기 위해서는 로그인이 필요해요
      </h1>
    </div>
  );
}

export default App;
