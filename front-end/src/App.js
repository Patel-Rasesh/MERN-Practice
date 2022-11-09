import './App.css'
import ProfileStartup from './components/profileStartup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import TopMenu from './components/TopMenu';
import Footer from './components/Footer';
import Greeting from './components/Greeting';

function App() {
  return (
    <>
      <TopMenu />
      {/* <ProfilePage /> */}
      <Greeting />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfileStartup />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Greeting />} />
        </Routes>
      </BrowserRouter> */}
      <Footer />
    </>
  );
}

export default App;
