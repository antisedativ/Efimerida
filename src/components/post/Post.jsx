import React from 'react';
import Card from 'react-bootstrap/Card';
import cl from './Post.module.css'
import {Button} from "react-bootstrap";

function Post({post}) {
    return (
        <div>
            {
                post.map(post => {
                    return (
                        <div key={post.id} className={cl.wrapper}>
                            <Card  className={cl.post}>
                                <Card.Header as="h5">{post.post_title}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{post.post_text}</Card.Title>
                                    <Card.Text>
                                        {post.post_created_date}
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
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