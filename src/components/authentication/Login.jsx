import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import cl from './authentication.module.css'
import {Link, NavLink} from "react-router-dom";

const Login = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onChangeUsername = e => {
        const username = e.target.value;
        setUsername(username);
    }
    const onChangePassword = e => {
        const password = e.target.value;
        setPassword(password);
    }
    const login = () => {
        props.login({ username: username, password: password });
        props.history.push('/');
    }
    return (
        <Container className={cl.login__wrapper}>
            <Form className={cl.login__content}>
                <p className={cl.login__title}>
                    Login
                </p>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={onChangeUsername}
                        variant="black"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={onChangePassword}
                    />
                </Form.Group>
                <Button className={cl.btn} variant="dark" onClick={login}>
                    Login
                </Button>
                <div className={cl.login__wrapper_link}>
                    Don’t have an account? <NavLink  to={"/signup"} className={cl.login__link}> Join Efimerida</NavLink>
                </div>
            </Form>
        </Container>
    )
}
export default Login;