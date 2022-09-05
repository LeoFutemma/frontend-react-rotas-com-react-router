import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Main from './pages/Main';
import TeacherDetail from './pages/Teacher-detail';

function ProtectedRoutes({ reditectTo }) {
  let isAutenthicated = true;
  return isAutenthicated ? <Outlet /> : <Navigate to={reditectTo} />
}

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />

      <Route element={<ProtectedRoutes reditectTo='/' />}>
        <Route path='/main' element={<Main />} />
        <Route path='/teacher/:id' element={<TeacherDetail />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;