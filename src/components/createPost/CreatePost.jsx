import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import cl from "./CreatePost.module.css"

const CreatePost = () => {
    return (
        <Container className={cl.wrapper}>
            <Form className={cl.content}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={15} placeholder="What's new?" />
                </Form.Group>
                <Button className={cl.settings__btn} variant="dark">
                    Next
                </Button>
            </Form>
        </Container>
    );
};

export default CreatePost;