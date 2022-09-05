import './styles.css';
import SignIn from '../SignIn';
import Initial from '../Initial';
import { Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Initial />} />
        <Route path='/main' element={<Initial />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default Main;