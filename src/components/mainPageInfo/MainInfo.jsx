import React from 'react';
import cl from "./MainInfo.module.css";
import InfoUser from "./InfoUser";
import {ListGroup} from "react-bootstrap";

const MainInfo = () => {
    return (
        <ListGroup className={cl.wrapper}>
            <ListGroup.Item style={{
                textAlign: "center",
                fontSize: 17,
                padding: 7
            }} variant="flush">
                User rating
            </ListGroup.Item>
            <div className={cl.content}>
                <InfoUser raiting={87} avatar={'https://abrakadabra.fun/uploads/posts/2022-02/1644764716_1-abrakadabra-fun-p-avatarki-iz-pinteresta-estetichnie-1.png'}/>
                <InfoUser raiting={51} avatar={''}/>
                <InfoUser raiting={30} avatar={'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'}/>
                <InfoUser raiting={15} avatar={'https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg'}/>
                <InfoUser raiting={7} avatar={''}/>
                <InfoUser raiting={-1} avatar={''}/>
                <InfoUser raiting={-10} avatar={'https://i.pinimg.com/736x/6d/54/9e/6d549e372a8b81bb2da23089526c2d7c.jpg'}/>
                <InfoUser raiting={-19} avatar={'https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg'}/>
            </div>
        </ListGroup>
    );
};
export default MainInfo;