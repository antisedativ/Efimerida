import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import cl from '../../styles/authentication.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerUser} from "../../redux/features/auth/authSlice";

const SignupPage = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = () => {
        try {
            dispatch(registerUser( {username, password, email}))
            setPassword('')
            setUsername('')
            setEmail('')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{minHeight: 'calc(100vh - 305px)', overflow:'hidden'}}>
            <Container className={cl.signup__wrapper} >
                <Form className={cl.signup__content} onSubmit={e => e.preventDefault()}>
                    <p className={cl.signup__title}>
                        Welcome Efimerida
                    </p>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            className='flat'
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            className='flat'
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className='flat'
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control type="password" placeholder="Repeat password" className='flat'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button
                        className={cl.btn}
                        variant="dark"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Create account
                    </Button>
                    <div className={cl.signup__wrapper_link}>
                        Already have an account? <NavLink  to={"/login"} className={cl.signup__link}> Login</NavLink>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default SignupPage;