import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Login from './admin/accounts/Login';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/admin/login' element={ <AuthLayout><Login /></AuthLayout> } />
        <Route path="*" element={ < Navigate to="/admin/login" /> } />
      </Routes>
    </div>
  );
}
export default App;