import React, {useEffect} from 'react';
import {Nav} from "react-bootstrap";
import Post from "../../components/post/Post";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../../redux/features/post/postSlice";

const MainPage = () => {
    const dispatch = useDispatch()
    const {loading, posts} = useSelector(state => state.post)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    // if(!posts.length) {
    //     return (
    //         <div>
    //             Posts not found.
    //         </div>
    //     )
    // }

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
            {
                posts?.map((post, id) => <Post post={post} key={id} />)
            }
        </>
    );
};

export default MainPage;