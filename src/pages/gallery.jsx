import React from 'react';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';

export default function Gallery() {
    return (
        <div>
            <Template>
                <Menu />
                <Body className="white center-text body-font">
                    <h1 className="title-font large-text">Gallery</h1>
                    <p>Look at the big dog baritone</p>
                </Body>
            </Template>
        </div>
    );
}
