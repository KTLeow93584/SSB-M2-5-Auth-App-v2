import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Profile from './pages/Profile.jsx';

import RenderAuthContext from './AuthContext.jsx';
import RequireAuth from './components/RequireAuth.jsx';

function App() {
  return (
    <RenderAuthContext>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } path="/dashboard" />
          <Route element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          } path="/profile" />
        </Routes>
      </BrowserRouter>
    </RenderAuthContext>
  )
}

export default App
