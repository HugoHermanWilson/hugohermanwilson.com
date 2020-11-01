import React from 'react';
import Template from '../layouts/Template';
import Menu from '../components/navigation/Menu';
import Body from '../components/Body';

export default function Missing404() {
    return (
        <div>
            <style>{'body{ background: black;}'}</style>
            <Template>
                <Menu />
                <Body className=" center-text body-font">
                    <h1 className="title-font large-text">404</h1>
                    <p>
                        Sorry, that page doesn&apos;t exist! Use the menu above
                        or{' '}
                        <span
                            role="button"
                            tabIndex="0"
                            className="pink"
                            onClick={() => {
                                // eslint-disable-next-line no-undef
                                window.history.back();
                            }}
                            onKeyPress={() => {
                                // eslint-disable-next-line no-undef
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
