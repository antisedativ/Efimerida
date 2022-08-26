import React from 'react';
import cl from "./Bookmarks.module.css"

const Bookmarks = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.statistics}>
                <img src="https://st3.depositphotos.com/6672868/13701/v/380/depositphotos_137014128-stock-illustration-user-profile-icon.jpg?forcejpeg=true" alt="logo"/>
                <div className={cl.username}>Bookmarks</div>
            </div>
        </div>
    );
};

export default Bookmarks;