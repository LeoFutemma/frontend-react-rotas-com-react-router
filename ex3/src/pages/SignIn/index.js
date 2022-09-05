import './styles.css';
import CubosLogo from '../../assets/cubos-logo.svg';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className='container'>
      <div className='login'>
        <img src={CubosLogo} alt="cubos-logo" />
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <span>Não tem cadastro? Clique aqui!</span>
        <Link to='/main'><button>Login</button></Link>
      </div>
    </div>
  );
}