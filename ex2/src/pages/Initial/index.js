import Main from '../Main';
import SignIn from '../SignIn';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes({ redirectTo }) {
  let isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function Initial() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route element={<ProtectedRoutes redirectTo={'/sign-in'} />}>
          <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Initial;