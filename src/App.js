import React from 'react'
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import MainPage from "./pages/main/MainPage";
import CreatePostPage from "./pages/create/CreatePostPage";
import BookmarksPage from "./pages/bookmarks/BookmarksPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App(props) {
    return (
    <div className="App">
        <Header />
        <div className="container mt-4">
            <Routes>
                <Route exact path="/" element={<MainPage/>} />
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
