import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import AuthLayout from './components/layout/AuthLayout';
import Login from './admin/accounts/Login';
import Register from './admin/accounts/Register';
import ForgotPassword from './admin/accounts/ForgotPassword';
import ResetPassword from './admin/accounts/ResetPassword';
import Dashboard from './admin/Dashboard';
import AdminLayout from './components/layout/AdminLayouts';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path='/admin/login' element={ <AuthLayout><Login /></AuthLayout> } />
        <Route path='/admin/register' element={ <AuthLayout><Register /></AuthLayout> } />
        <Route path='/admin/forgot-password' element={ <AuthLayout><ForgotPassword /></AuthLayout> } />
        <Route path='/admin/reset-password' element={ <AuthLayout><ResetPassword /></AuthLayout> } />
        <Route path='/admin/dashboard' element={ <AdminLayout><Dashboard /></AdminLayout> } />
        <Route path="*" element={ < Navigate to="/admin/login" /> } />
      </Routes>
    </ThemeProvider>
  );
}
export default App;