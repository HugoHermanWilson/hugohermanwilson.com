import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.css';

export default function DesktopMenu(props) {
    const menuStateClass = () => {
        return props.visible ? 'visible' : 'hidden';
    };

    return (
        <nav
            id="DesktopMenu"
            className={`title-font ${css.container}
            ${css[menuStateClass(props)]}`}
        >
            <a className={css.item} href="/biography">
                Biography
            </a>
            <a className={css.item} href="/listen">
                Listen
            </a>
            <a className={css.item} href="/gallery">
                Gallery
            </a>
            <a className={css.item} href="/events">
                Events
            </a>
            <a className={css.item} href="/contact">
                Contact
            </a>
        </nav>
    );
}

DesktopMenu.propTypes = {
    visible: PropTypes.bool.isRequired
};
