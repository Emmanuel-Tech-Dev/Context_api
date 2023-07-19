import  { useState, useContext } from 'react';
import { Button , Modal } from 'react-bootstrap';
import Student from './Student';
import { UseContext } from '../UseContext';
import AddForm from './AddForm';


const StudentList = () => {

    const {userData} = useContext(UseContext)

    console.log(userData)
      const [show, setShow] = useState(false);

      const handleShow = () => setShow(true);
      const handleClose = () => setShow(false);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Blog Content</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              className="btn btn-success"
              data-toggle="modal"
              onClick={handleShow}
            >
              <i className="material-icons">&#xE147;</i>{' '}
              <span>Add New Post </span>
            </Button>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Posts</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => (
            <tr key={item.id}>
              <Student item={item} />
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Posts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StudentList;
