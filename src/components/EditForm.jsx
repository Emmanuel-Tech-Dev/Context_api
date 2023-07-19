/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { UseContext } from '../UseContext';
import { toast } from 'react-toastify';
import { Form, Button } from 'react-bootstrap';


const EditForm = ({data}) => {
  const { updateUserData } = useContext(UseContext);

  const id = data.id

  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [address, setAddress] = useState(data.address);
  const [phone, setPhone] = useState(data.phone);
  const [post, setPost] = useState(data.post);

    const updatedUserData =  {id, name, email, phone, address , post } 


  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserData(id , updatedUserData);
    toast.success(
      `${name} data has been updated successfully`,
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
   
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address"
          rows={3}
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows={3}
          name="post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="Enter your Post Content here , It shouldnt be more than 300 words"
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Post Edited Post
      </Button>
    </Form>
  );
};

export default EditForm;
