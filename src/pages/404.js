import React from 'react';
import Template from '../layouts/index';
import Menu from '../components/menu.js';
import Body from '../components/Body.js';

export default function Missing404(props) {

    return (
        <div>
            <style>
                {"body{ background: black;}"}
            </style>
            <Template>
                <Menu />
                <Body className="white center-text">
                    <h1 className="title-font large-text">404</h1>
                    <p>
                        Sorry, that page doesn't exist! Use the menu above or {" "}
                        <span className="pink" onClick={() => {window.history.back()}}>
                            click here to go back
                        </span>
                    </p>
                </Body>
            </Template>
        </div>
    );
}
