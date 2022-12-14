import React, {useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import { FiUser } from "react-icons/fi";
import {Link} from "react-router-dom";

function Header() {
    const [user, setUser] = useState(window.localStorage.getItem('user'))
    const [token, setToken] = useState(window.localStorage.getItem('token'))

    const logout = () => {
        window.localStorage.setItem('user','')
        window.localStorage.setItem('token','')
        setToken('')
        setUser('')
    }

    return (
        <Navbar collapseOnSelect  bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Efimerida</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  className="justify-content-end flex-grow-1 pe-1">
                        <Link  className="nav-link" to={"/"}>All posts</Link>
                        <Link  className="nav-link" to={"/create"}>Create post</Link>
                        <Link  className="nav-link" to={"/bookmarks"}>Bookmarks</Link>
                        {user ? (
                            <div className="nav-link" onClick={logout} ><FiUser/> Log out {user}</div>
                        ) : (
                            <Link className="nav-link" to={'/login'}><FiUser/> Login</Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;