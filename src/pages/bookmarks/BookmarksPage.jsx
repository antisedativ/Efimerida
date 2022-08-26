import React from 'react';
import cl from './BookmarksPage.module.css'

import Bookmarks from "../../components/bookmarks/Bookmarks";
import BookmarksPost from "../../components/bookmarks/bookmarksPost/BookmarksPost";
import BookmarksInfo from "../../components/bookmarks/bookmarksInformation/BookmarksInfo";

const BookmarksPage = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.bookmarks}>
                <Bookmarks />
            </div>
            <div className={cl.bookmarksInfo}>
                <BookmarksInfo />
            </div>
            <div className={cl.bookmarksPost}>
                <BookmarksPost />
                <BookmarksPost />
                <BookmarksPost />
            </div>
        </div>
    );
};

export default BookmarksPage;