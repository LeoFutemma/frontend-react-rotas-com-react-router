import './styles.css';
import { Link } from 'react-router-dom';

function Initial() {
  return (
    <div className="container">
      <h1>Você está na página principal!</h1>
      <img src='http://pa1.narvii.com/7416/0e6041280e2cbb4427abcf7d6d64660172571d6br1-540-300_00.gif' alt='pikachu gif' />
      <p>Clique <b><Link to="/sign-in" className='main'>aqui</Link></b> para ir à página de SignIn!</p>
    </div>
  );
}

export default Initial;