import React from 'react';
import css from './index.module.css';

export default function Body(props) {
    return (
        <div
            id="Body"
            className={`${props.className} ${css.container} ${css.pinkAccent}`}
        >
            {props.children}
        </div>
    );
}
