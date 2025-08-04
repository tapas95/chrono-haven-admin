import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Login from './admin/accounts/Login';
import Register from './admin/accounts/Register';
import ForgotPassword from './admin/accounts/ForgotPassword';
import ResetPassword from './admin/accounts/ResetPassword';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/admin/login' element={ <AuthLayout><Login /></AuthLayout> } />
        <Route path='/admin/register' element={ <AuthLayout><Register /></AuthLayout> } />
        <Route path='/admin/forgot-password' element={ <AuthLayout><ForgotPassword /></AuthLayout> } />
        <Route path='/admin/reset-password' element={ <AuthLayout><ResetPassword /></AuthLayout> } />
        <Route path="*" element={ < Navigate to="/admin/login" /> } />
      </Routes>
    </div>
  );
}
export default App;