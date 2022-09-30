import React, {useEffect} from 'react';
import {Accordion, Nav} from "react-bootstrap";
import Post from "../../components/post/Post";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../../redux/features/post/postSlice";
import MainInfo from "../../components/mainPageInfo/MainInfo";

const MainPage = () => {
    const dispatch = useDispatch()
    const {loading, posts} = useSelector(state => state.post)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    if(!posts.length) {
        return (
            <div style={{minHeight: '1000px'}}>
                Loading...
            </div>
        )
    }

    return (
        <div style={{marginBottom:"30px"}} >
            <Nav  className="justify-content-center" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Marketing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Management</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/link-4">Administration</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/link-5">Development</Nav.Link>
                </Nav.Item>
            </Nav>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" style={{width: '57rem', marginTop:'20px'}}>
                    <Accordion.Header>Sort by</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <div>
                    {
                        posts?.map((post, id) => <Post post={post} key={id} />)
                    }
                </div>
                <MainInfo />
            </div>

        </div>
    );
};

export default MainPage;