import React, {useEffect, useState} from 'react'
import {Button, Container, Form} from "react-bootstrap"
import cl from "./CreatePost.module.css"
import {useDispatch} from "react-redux"
import {createPosts} from "../../redux/features/post/postSlice"

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')
    const [rubric, setRubric] = useState('')

    const [validSelect, setValidSelect] = useState(false)
    const [validated, setValidated] = useState(false)

    const dispatch = useDispatch()

    // Form validation
    const handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()

            // Calling the submit function
            createPost()
        }
        setValidated(true)
    }

    const onChangeTitle = e => {
        const title = e.target.value
        setTitle(title)
    }

    const onChangeText = e => {
        const text = e.target.value
        setText(text)
    }

    const onChangeImage = e => {
        const img = e.target.files[0]
        setImage(img)
    }

    const onChangeRubric = e => {
        if(e.target.value === "default" ) {
            setValidSelect(true)
        } else {
            setValidSelect(false)
            const rubric = e.target.value
            setRubric(rubric)
        }
    }

    const createPost = () => {
        try {
            const data = new FormData()
            data.append('post_title', title)
            data.append('post_text', text)
            data.append('post_image', image)
            data.append('rubric_name',rubric)
            dispatch(createPosts(data))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container className={cl.wrapper}>
            <Form
                className={cl.content}
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
            >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        required
                        className='flat'
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={onChangeTitle} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rubric</Form.Label>
                    <Form.Select
                        className='flat'
                        isInvalid={validSelect}
                        required
                        value={rubric}
                        onChange={onChangeRubric}
                    >
                        <option value='default'>Default select</option>
                        <option value='development'>Development</option>
                        <option value='design'>Design</option>
                        <option value='marketing'>Marketing</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        required
                        className='flat'
                        as="textarea"
                        rows={10}
                        placeholder="What's new?"
                        value={text}
                        onChange={onChangeText} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Add a post image</Form.Label>
                    <Form.Control
                        type="file"
                        className='flat'
                        required
                        onChange={onChangeImage}
                    />
                </Form.Group>
                {
                    image && <div className={cl.image}><img src={URL.createObjectURL(image)} alt="image" /></div>
                }
                <Button
                    className={cl.settings__btn}
                    type="submit"
                    variant="dark"
                >
                    Create post
                </Button>
            </Form>
        </Container>
    );
};

export default CreatePost;