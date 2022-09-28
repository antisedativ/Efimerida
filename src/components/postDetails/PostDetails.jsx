import React, {useCallback, useEffect, useState} from 'react';
import axios from "../../utils/axios";
import {useParams} from "react-router-dom";
import {Badge, Card, ListGroup} from "react-bootstrap";
import cl from './PostDetails.module.css'
import {FcLike} from "react-icons/fc";
import {AiOutlineEye} from "react-icons/ai";
import moment from "moment/moment";

const PostDetails = () => {
    const [post, setPost] = useState(null)
    const params = useParams()

    const fetchPost = useCallback(async() => {
        const { data } = await axios.get(`/post_detail/${params.id}/`)
        setPost(data)
    }, [params.id])

    useEffect(() => {
        fetchPost()
    },[fetchPost])

    if(!post) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <>
            <div className={cl.wrapper}>
                <Card className={cl.card__wrapper}>
                    <Card.Img variant="top" src={post.post_image} height="400" />
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className={cl.card__author}>
                            <div>
                                <img src="https://st3.depositphotos.com/6672868/13701/v/380/depositphotos_137014128-stock-illustration-user-profile-icon.jpg?forcejpeg=true" alt="" width="25"/>
                                <span>{post.post_author.username}</span>
                            </div>
                            {moment(post.post_created_date).format("Do MMMM YYYY")}
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Title className={cl.card__title}>
                            {post.post_title}
                    </Card.Title>
                    <Card.Body>
                        <Card.Text>
                            {post.post_text}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className={cl.card__footer}>
                        <Card.Body className={cl.card__statistics}>
                            <FcLike/> {post.post_likes}
                            <span><AiOutlineEye/>{post.post_views} </span>
                        </Card.Body>
                        <Card.Link href="#" className={cl.post_rubric}>
                            <Badge bg="warning" text="dark">
                                {post.post_rubric.rubric_name}
                            </Badge>
                        </Card.Link>
                    </Card.Footer>
                </Card>
            </div>
        </>
    );
};

export default PostDetails;