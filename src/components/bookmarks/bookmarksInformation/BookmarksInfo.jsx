import React from 'react';
import cl from "./BookmarksInfo.module.css"

const BookmarksInfo = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div className={cl.title}>
                    <p>Statistics</p>
                </div>
                <div className={cl.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    A animi aperiam at, fugiat harum hic ipsum itaque maiores minima nemo nobis perspiciatis quod tempora vel veritatis.
                    Harum illo itaque necessitatibus.
                </div>
            </div>
        </div>
    );
};

export default BookmarksInfo;