import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import cl from "./CreatePost.module.css"
import DataService from "../../services/data";

const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [memo, setMemo] = useState("");

    const onChangeTitle = e => {
        const title = e.target.value;
        setTitle(title);
    }

    const onChangeMemo = e => {
        const memo = e.target.value;
        setMemo(memo);
    }

    // const onChangeImage = e => {
    //     console.log(e)
    //     const image = e.target.value;
    //
    // }

    const createPost = () => {
        // let data = {
        //     "post_author": 1,
        //     "post_created_date": Date.now(),
        //     "post_image": null,
        //     "post_text": memo,
        //     "post_title": title
        // }

        let data = {
            id: 11,
            post_author: 1,
            post_created_date: "2022-09-19T21:47:31.612455Z",
            post_edit_date: "2022-09-19T21:47:31.612455Z",
            post_image: "/images/post_image/f5baef4b6b6677020ab8d091ef78a3bc_w200.gif",
            post_likes: 0,
            post_rubric: 4,
            post_tags: [1],
            post_text: "Gose of eeeeeeeeeee e w",
            post_title: "Gooooosee",
            post_views: 0,
        }

        DataService.createPost(data)
            .then(response => {
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <Container className={cl.wrapper}>
            <Form className={cl.content}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" value={title} onChange={onChangeTitle} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rubric</Form.Label>
                    <Form.Select>
                        <option>Default select</option>
                        <option>Development</option>
                        <option>Design</option>
                        <option>Marketing</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={10} placeholder="What's new?" value={memo} onChange={onChangeMemo} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Add a post image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Button className={cl.settings__btn} variant="dark" onClick={() => createPost()}>
                    Create post
                </Button>
            </Form>
        </Container>
    );
};

export default CreatePost;