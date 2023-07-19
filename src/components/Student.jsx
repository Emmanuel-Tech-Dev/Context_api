/* eslint-disable react/prop-types */
import  {useState ,useEffect,  useContext } from 'react'
import { UseContext } from '../UseContext';
import { toast } from 'react-toastify';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm';


const Student = ({item}) => {

    const {deleteUserData } = useContext(UseContext)


    const handleDelete = () => {
        deleteUserData(item.id)
        toast.error(`${item.name} User Data Deleted`, {
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

     const [show, setShow] = useState(false);

     const handleShow = () => setShow(true);
     const handleClose = () => setShow(false);

     useEffect(() => {
       handleClose();
     }, [item]);

  return (
    <>
      <td>
        {' '}
        <img
          src={`'http://localhost:5174/' ${item.file}`}
          alt="Selected File"
          style={{ maxWidth: '200px'  }}
        />
      </td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.address}</td>
      <td>{item.phone}</td>
      <td>{item.post}</td>
      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <button
            onClick={handleShow}
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE254;</i>
          </button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
          <button
            onClick={handleDelete}
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE872;</i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm data={item} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Student
