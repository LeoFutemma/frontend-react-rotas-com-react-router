import './styles.css';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="container">
      <h1>Você está na página de Sign-In!</h1>
      <img src='https://thumbs.gfycat.com/SoggyGoldenHorsemouse-max-1mb.gif' alt='mudkip gif' />
      <p>Clique <b><Link to="/main" className='signin'>aqui</Link></b> para ir à página principal!</p>
    </div>
  );
}

export default SignIn;