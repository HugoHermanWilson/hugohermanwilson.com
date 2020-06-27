import React from 'react';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';

export default function Missing404() {
    return (
        <div>
            <style>{'body{ background: black;}'}</style>
            <Template>
                <Menu />
                <Body className="white center-text">
                    <h1 className="title-font large-text">404</h1>
                    <p>
                        Sorry, that page doesn&apos;t exist! Use the menu above
                        <span
                            className="pink"
                            onClick={() => {
                                window.history.back();
                            }}
                        >
                            click here to go back
                        </span>
                    </p>
                </Body>
            </Template>
        </div>
    );
}
