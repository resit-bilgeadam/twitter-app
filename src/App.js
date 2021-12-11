import {Routes, Route, Link} from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Feeds from './pages/Feeds';
import Login from './pages/Login';
import Register from './pages/Register';
import s from './App.module.scss';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Feeds />} />
        </Route>

        <Route path='/auth' element={<AuthLayout/>}>
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
