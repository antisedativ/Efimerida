import React  from 'react';
import cl from "./MainInfo.module.css";

const InfoUser = ({raiting, avatar}) => {
    return (
        <div className={cl.author}>
            <div className={cl.description}>
                {
                    avatar ? <img src={avatar}  alt="" width={40} style={{borderRadius: "50%"}}/>
                        : <img src="https://st3.depositphotos.com/6672868/13701/v/380/depositphotos_137014128-stock-illustration-user-profile-icon.jpg?forcejpeg=true" alt="" width={40} style={{borderRadius: "50%"}}/>
                }
                <span style={{marginLeft:10}}>John Rivlin</span>
            </div>
            {
                raiting < 0
                    ? <span style={{color: 'crimson'}}>{raiting}</span>
                    : <span style={{color: 'YellowGreen'}}>{`+${raiting}`}</span>
            }

        </div>
    );
};

export default InfoUser;