import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { toast } from 'react-toastify';

const NavCont = () => {

  const {isLoggedIn , user , logout} = useContext(AuthContext)

  const handleLogout = () => {
    logout()
    toast.success('Logged out Successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }


  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link to={'/'}>
            <Navbar.Brand href="#home">
              Welcome : <span className="adds">BLOGENTURE</span>
            </Navbar.Brand>
          </Link>
          {isLoggedIn && <span>{user?.username}</span>}
          {isLoggedIn ? (
            <Nav className="me-auto">
              <Link to="/login">
                <Button variant="light" className="mx-2" onClick={handleLogout}>
                  Logout
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="success" className="mx-2">
                  Go to Dashboard
                </Button>
              </Link>
            </Nav>
          ) : (
            <Nav className="me-auto">
              <Link to="/login">
                <Button variant="light" className="mx-2">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="mx-2">Sign Up</Button>
              </Link>
             
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default NavCont;
