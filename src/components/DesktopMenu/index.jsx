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
            role="menu"
        >
            <a className={css.item} href="/biography" role="menuitem">
                Biography
            </a>
            <a className={css.item} href="/listen" role="menuitem">
                Listen
            </a>
            <a className={css.item} href="/gallery" role="menuitem">
                Gallery
            </a>
            <a className={css.item} href="/diary" role="menuitem">
                Diary
            </a>
            <a className={css.item} href="/contact" role="menuitem">
                Contact
            </a>
        </nav>
    );
}

DesktopMenu.propTypes = {
    visible: PropTypes.bool.isRequired
};
