import React from 'react';
import Card from 'react-bootstrap/Card';
import cl from './Post.module.css'
import {FcLike} from "react-icons/fc";
import {Button, ListGroup} from "react-bootstrap";
import {AiOutlineEye} from "react-icons/ai";
import moment from "moment/moment";
import {Link} from "react-router-dom";

function Post({post}) {
    return (
        <div>
            <div key={post.id} className={cl.wrapper}>
                <Card  className={cl.post}>
                    {post.post_image && <Card.Img variant="left" className={cl.img} src={post.post_image} alt={post.id} width={"50%"} height={"100%"}/>}
                    <Card.Body>
                        <ListGroup className={cl.content} variant="flush">
                            <ListGroup.Item className={cl.author}>
                                <span className={cl.author__name}>{post.post_author.username}</span>
                                <span className={cl.create__date}>
                                {moment(post.post_created_date).format("Do MMMM YYYY")}
                            </span>
                            </ListGroup.Item>
                            <Card.Title>{post.post_title}</Card.Title>
                            <Card.Text className={cl.post__text}>
                                {post.post_text}
                            </Card.Text>
                            <ListGroup.Item className={cl.statistics}><FcLike/> {post.post_likes} <span><AiOutlineEye/> {post.post_views} </span></ListGroup.Item>
                        </ListGroup>
                        <Button variant="dark" className={cl.btn}><Link to={`post/${post.id}/`} className={cl.btn__text}>Read more...</Link></Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Post;