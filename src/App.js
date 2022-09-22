import React, {useEffect, useState} from 'react'
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import MainPage from "./pages/main/MainPage";
import CreatePostPage from "./pages/create/CreatePostPage";
import BookmarksPage from "./pages/bookmarks/BookmarksPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";

import DataService from "./services/data";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App(props) {

    // http://127.0.0.1:8000/api/post/?format=json
    // http://127.0.0.1:8000/api/post/

    // http://jservice.io/api/random?count=1
    // https://pokeapi.co/api/v2/pokemon/ditto

    const [post, setPost] = useState([])

    useEffect(() => {
        getPosts()
    },[])

    const getPosts = async () => {
        const response = await DataService.getAll()
        console.log(response.data.post)
        console.log(response)
        setPost(response.data.post)
    }

    return (
    <div className="App">
        <Header />
        <div className="container mt-4">
            <Routes>
                <Route exact path="/" element={<MainPage post={post}/>} />
                <Route path="/create" element={<CreatePostPage />}/>
                <Route path="/bookmarks" element={<BookmarksPage />}/>
                <Route path="/login" element={<LoginPage />} {...props}/>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
