import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import cl from './Post.module.css'
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {ListGroup} from "react-bootstrap";
import {AiOutlineEye} from "react-icons/ai";

function Post({post}) {
    const [like, setLike] = useState(0)

    // const liked = (id) => {
    //     // if(post[id].post_likes !== undefined)
    //     //     setLike(post[id].post_likes + 1)
    //     console.log(post[id-1].post_title)
    //     console.log("liked!!!")
    //     console.log(like)
    // }

    return (
        <div>
            {
                post.map(post => {
                    return (
                        <div key={post.id} className={cl.wrapper}>
                            <Card  className={cl.post}>
                                {post.post_image && <Card.Img variant="left" className={cl.img} src={`http://localhost:8000${post.post_image}`} alt={post.id} width={"50%"} height={"100%"}/>}
                                <Card.Body>
                                    <ListGroup className={cl.content} variant="flush">
                                        <ListGroup.Item className={cl.author}>
                                            <span className={cl.author__name}>Ivan Petrov</span>
                                            <span className={cl.create__date}>today 12:47</span>
                                        </ListGroup.Item>

                                        <Card.Title>{post.post_title}</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deserunt eaque laudantium maiores nostrum, provident quidem quod velit.
                                            Alias cum iusto maiores quos sint tempora, tempore veniam? Cupiditate inventore, nam.

                                        </Card.Text>
                                        <ListGroup.Item className={cl.statistics}><FcLike/> {post.post_likes} <span><AiOutlineEye/> {post.post_views}</span></ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Post;