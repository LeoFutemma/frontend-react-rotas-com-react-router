import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className='container'>
      <h1>Você está na página Main!</h1>
      <img src='https://boiameia.com/wp-content/uploads/2019/03/seja-bem-vindo-png-5.png' alt='bem-vindo' />
      <p>Ir para <b><Link to="/sign-in" className='main'>Sign-In</Link></b></p>
    </div>
  );
}

export default Main;