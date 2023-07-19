import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { UseContext } from '../../UseContext';

const BlogStory = () => {

  const id = useParams().id
  console.log(id)

  const {userData} = useContext(UseContext)


  const post = userData.find((post) => post.id === id)

  return (
    <div>
      <Card>
        <Card.Header>{post?.name}: {post?.email}</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            {post?.post}
          </Card.Text>
         
        </Card.Body>
      </Card>
    </div>
  );
}

export default BlogStory
