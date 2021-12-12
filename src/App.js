import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import AuthenticatedRoute from './layouts/AuthenticatedRoute';
import PublicRoute from './layouts/PublicRoute';
import Feeds from './pages/Feeds';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { fetchUserDetails } from './store/actionCreators';
import s from './App.module.scss';

function App() {
  const dispatch = useDispatch();

  const fetchUser = () => {
    dispatch(fetchUserDetails());
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Feeds />} />
          <Route path='/me' element={
            <AuthenticatedRoute>
              <Profile />
            </AuthenticatedRoute>
          } />
        </Route>

        <Route path='/auth' element={
          <PublicRoute>
            <AuthLayout/>
          </PublicRoute>
        }>
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
