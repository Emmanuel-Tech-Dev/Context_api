import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Blogs from './pages/Blogs/Blogs'
import BlogStory from './pages/BlogStory/BlogStory'
import DashBoard from './pages/DashBoard/DashBoard'
import Login from './pages/LogIn/Login'
import SignUp from './pages/SignUp/SignUp'
import NavCont from './components/Navbar';
import { AuthProvider } from './AuthContext';


function App() {
  return (
    <>
    
      <BrowserRouter>
      <AuthProvider>
         <NavCont/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/blogstory/:id" element={<BlogStory />} />
          <Route exact path="/" element={<Blogs />} />
        </Routes>
      </AuthProvider>
     
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
