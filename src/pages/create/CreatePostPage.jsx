import React from 'react';
import cl from "./CreatePostPage.module.css"

import CreatePost from "../../components/createPost/CreatePost";
import CreatePostNews from "../../components/createPostNews/CreatePostNews";

const CreatePostPage = () => {
    return (
        <div className={cl.wrapper}>
            <CreatePost  />
            <CreatePostNews />
        </div>
    );
};

export default CreatePostPage;