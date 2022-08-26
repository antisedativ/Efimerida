import React from 'react';
import cl from "./BookmarksPost.module.css";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";

const BookmarksPost = () => {
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
};

export default BookmarksPost;