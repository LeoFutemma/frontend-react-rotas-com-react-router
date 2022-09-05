import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className='container'>
      <h1>Você está na página de Sign-In!</h1>
      <img src='https://plumbr.io/app/uploads/2015/01/thread-lock.jpeg' alt='cadeado' />
      <p>Ir para <b><Link to="/main" className='main'>Main</Link></b></p>
    </div>
  );
}

export default SignIn;