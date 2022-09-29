import React from 'react'
import { Routes, Route } from "react-router-dom";
import './styles/index.css'

import Header from "./components/header/Header";
import MainPage from "./pages/main/MainPage";
import CreatePostPage from "./pages/create/CreatePostPage";
import BookmarksPage from "./pages/bookmarks/BookmarksPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import PostDetails from "./components/postDetails/PostDetails";
import Footer from "./components/footer/Footer";

function App() {
    return (
    <div className="App">
        <Header />
        <div className="container mt-4">
            <Routes>
                <Route exact path="/" element={<MainPage/>} />
                <Route path="/post/:id/" element={<PostDetails />}/>
                <Route path="/create" element={<CreatePostPage />}/>
                <Route path="/bookmarks" element={<BookmarksPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
