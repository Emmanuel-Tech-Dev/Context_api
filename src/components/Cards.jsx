import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UseContext } from '../UseContext';
import { Link } from 'react-router-dom';


const Cards = () => {

    const {userData} = useContext(UseContext)

  return (
    <div className='myflex my-5 row'>
       

       
        {userData.map((item) => (
        <Card key={item.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.post.slice(0 , 100)}...
          </Card.Text>
         <Link to={`/blogstory/${item.id}`}>
         <Button variant="primary">Read Post</Button>
         </Link>
          
        </Card.Body>
      </Card>
        ))}
      
    </div>
  );
}

export default Cards
