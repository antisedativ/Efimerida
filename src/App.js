import React from 'react'
import { Routes, Route } from "react-router-dom";
import {useState} from "react";

import Header from "./components/header/Header";
import MainPage from "./pages/main/MainPage";
import CreatePostPage from "./pages/create/CreatePostPage";
import BookmarksPage from "./pages/bookmarks/BookmarksPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import axios from "axios";

function App(props) {
    // const [user, setUser] = useState(null);
    // const [token, setToken] = useState(null);
    // const [error, setError] = useState('');
    //
    // async function login(user = null) { // default user to null
    //     setUser(user);
    // }
    // async function logout() {
    //     setUser(null);
    // }
    // async function signup(user = null) { // default user to null
    //     setUser(user);
    // }

    // http://127.0.0.1:8000/api/post/?format=json
    // http://127.0.0.1:8000/api/post/

    // http://jservice.io/api/random?count=1
    // https://pokeapi.co/api/v2/pokemon/ditto

    const getAll = () => {
        return axios.get('http://127.0.0.1:8000/api/post/?format=json');
    }

    const retrieveTodos = () => {
        getAll(props.token)
            .then(response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    retrieveTodos()

    return (
    <div className="App">
        <Header />
        <div className="container mt-4">
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/create" element={<CreatePostPage />}/>
                <Route path="/bookmarks" element={<BookmarksPage />}/>
                <Route path="/login" element={<LoginPage />} {...props}/>
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
