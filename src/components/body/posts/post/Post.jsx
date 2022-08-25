import React from 'react';
import Card from 'react-bootstrap/Card';
import cl from './Post.module.css'
import {Button} from "react-bootstrap";

function Post() {
    return (
        <div className={cl.wrapper}>
            <Card className={cl.post}>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Post;