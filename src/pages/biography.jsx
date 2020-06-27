import React from 'react';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';

export default function Biography() {
    return (
        <div>
            <Template>
                <Menu />
                <Body className="white center-text">
                    <h1 className="title-font large-text">Biography</h1>
                    <p>He&apos;s a big dog baritone</p>
                </Body>
            </Template>
        </div>
    );
}
