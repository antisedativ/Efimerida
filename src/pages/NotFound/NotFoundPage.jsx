import React from 'react';
import cl from "./NotFoundPage.module.css"
import {NavLink} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.title}>
                404
            </div>
            <div className={cl.description}>
                This is not the webpage you are looking for. You can go to the main page <NavLink  to={"/"}> here</NavLink>
            </div>
        </div>
    );
};

export default NotFoundPage;