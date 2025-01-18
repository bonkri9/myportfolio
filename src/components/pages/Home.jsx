import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  }

  return (
    <>
      <div>
        <h1>こんにちは~!</h1>
        <button onClick={goToAbout}>ボタン</button>
      </div>
    </>
  )
};

export default Home;