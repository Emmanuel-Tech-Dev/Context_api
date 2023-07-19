import { useContext, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { AuthContext } from '../../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const SignUp = () => {

  const navigate = useNavigate()

  const {register , isLoggedIn } = useContext(AuthContext)

  const [username , setUsername] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

 const handleSubmit = (e) => {
   e.preventDefault();
   // Call the register function to save the user data to localStorage
   const userData = { username,email, password };
  register(userData);
  
    if(isLoggedIn) {
      navigate('/dashboard')
      toast.success('Registration Successful', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }else{
      toast.error('Invalid logged in credentials', {
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
   setUsername('')
   setEmail('')
   setPassword('')
   console.log('loggedin successfully')
 };


  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Bililope</h2>
                  <p className=" mb-5">
                    Please enter your Registratin credentials
                  </p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button
                          className="w-100"
                          variant="primary"
                          type="submit"
                        >
                          Register
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?{' '}
                      <Link  to={'/login'}>
                     
                        <a href="{''}" className="text-primary fw-bold">
                          Login
                        </a>
                         </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
