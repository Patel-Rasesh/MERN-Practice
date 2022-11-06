import './App.css'
import ProfileStartup from './components/profileStartup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import TopMenu from './components/TopMenu';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <TopMenu />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileStartup />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
