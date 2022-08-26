import React from 'react';
import {Nav} from "react-bootstrap";
import Post from "../../components/post/Post";

const MainPage = () => {
    return (
        <>
            <Nav  className="justify-content-center" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0">Все</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Дизайн</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Маркетинг</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Менеджмент</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/link-4">Администрирование</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/link-5">Разработка</Nav.Link>
                </Nav.Item>
            </Nav>
            <Post />
        </>
    );
};

export default MainPage;