import React from 'react'
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { Routes, Route } from "react-router-dom";
import {useState} from "react";
import CreatePost from "./components/body/posts/CreatePost";
import Login from "./components/header/authentication/Login";
import Signup from "./components/header/authentication/Signup";

function App(props) {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [error, setError] = useState('');

    async function login(user = null) { // default user to null
        setUser(user);
    }
    async function logout() {
        setUser(null);
    }
    async function signup(user = null) { // default user to null
        setUser(user);
    }

  return (
    <div className="App">
        <Header />


        <div className="container mt-4">
            <Routes>
                <Route exact path="/" element={<Body />} />
                <Route path="/create" element={<CreatePost />}/>
                <Route path="/login" element={<Login />} {...props} login={login}/>
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
