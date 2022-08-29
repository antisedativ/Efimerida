import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import cl from "./CreatePost.module.css"
import {createPost} from "../../services/data";

const CreatePost = () => {

    let initialTodoTitle = "";
    let initialTodoMemo = "";
    const [title, setTitle] = useState(initialTodoTitle);
    const [memo, setMemo] = useState(initialTodoMemo);

    const onChangeTitle = e => {
        const title = e.target.value;
        setTitle(title);
    }

    const onChangeMemo = e => {
        const memo = e.target.value;
        setMemo(memo);
    }

    const saveTodo = () => {
        let data = {
            "post_title": title,
            "post_author": 1,
            "post_text": memo,
            "post_created_date": "2022-08-26T01:53:10.857926Z",
            "post_edit_date": null,
            "post_rubric": 1
        }
        createPost(data)
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
                <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={15} placeholder="What's new?" value={memo} onChange={onChangeMemo} />
                </Form.Group>
                <Button className={cl.settings__btn} variant="dark" onClick={saveTodo}>
                    Next
                </Button>
            </Form>
        </Container>
    );
};

export default CreatePost;