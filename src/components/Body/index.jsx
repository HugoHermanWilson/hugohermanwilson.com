import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.css';

export default function Body(props) {
    return (
        <div
            id="Body"
            className={`${props.className} ${css.container} ${css.pinkAccent}`}
        >
            <div className={css.body}>{props.children}</div>
        </div>
    );
}

Body.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};
