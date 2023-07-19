/* eslint-disable react/prop-types */
import  { useContext, useState } from 'react';
import { UseContext } from '../UseContext';
import { toast } from 'react-toastify';
import { Form, Button } from 'react-bootstrap';


const AddForm = ({ handleClose }) => {
  const { addUserData } = useContext(UseContext);

  const [newData, setNewData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    post: '',
    file : null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setNewData({ ...newData, file });
    };


  const { name, email, phone, address ,post, file } = newData;

  const handleSubmit = (e) => {
    e.preventDefault();
    addUserData(name, email, address, phone ,post, file);
    toast.success(
      `New Data Collection has been added to the table successfully`,
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      }
    );
    setNewData({
      name: '',
      email: '',
      address: '',
      phone: '',
      file : null
    });

   
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control
          type="file"
          name="file"
          accept=".png, .jpg, .jpeg, .gif"
          onChange={handleFileChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Address"
          name="address"
          value={address}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows={3}
          name="post"
          value={post}
          onChange={handleChange}
          placeholder="Enter your Post Content here , It shouldnt be more than 300 words"
         
        />
      </Form.Group>
      <Button variant="success" type="submit" block onClick={handleClose}>
        Add Post Content
      </Button>
    </Form>
  );
};

export default AddForm;
