import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function Header() {
    const user = null
    return (
        <Navbar collapseOnSelect  bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Efimerida</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  className="justify-content-end flex-grow-1 pe-1">
                        <Link  class="nav-link" to={"/"}>Главная</Link>
                        <Link  class="nav-link" to={"/create"}>Создать</Link>
                        <Link  class="nav-link" to={"/notes"}>Заметки</Link>
                        {user ? (
                            <Link class="nav-link" to={'/logout'}>Выйти {user}</Link>
                        ) : (
                            <Link class="nav-link" to={'/login'}>Войти</Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;