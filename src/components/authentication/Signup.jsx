import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import cl from "./authentication.module.css";
import {NavLink} from "react-router-dom";
function Signup() {
    return (
        <Container className={cl.signup__wrapper}>
            <Form className={cl.signup__content}>
                <p className={cl.signup__title}>
                    Welcome Efimerida
                </p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Repeat password</Form.Label>
                    <Form.Control type="password" placeholder="Repeat password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className={cl.btn} variant="dark" type="submit">
                    Create account
                </Button>
                <div className={cl.signup__wrapper_link}>
                    Already have an account? <NavLink  to={"/login"} className={cl.signup__link}> Login</NavLink>
                </div>
            </Form>
        </Container>
    );
}
export default Signup;