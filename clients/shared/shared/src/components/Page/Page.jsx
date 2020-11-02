import React from 'react';
import './page.scss';
import {Header} from "./Header/Header";

export const Page = (props) => {
    return (
        <div className="page">
            <Header quizNight={props.quizNight}
                    title={props.title}
                    cardProvider={props.cardProvider}
                    navbarProvider={props.navbarProvider}/>
            <div className="content">
                {props.children}
            </div>
            <props.navbarProvider bg="primary" fixed="bottom" variant="footer"/>
        </div>
    );
};