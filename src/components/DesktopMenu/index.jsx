import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.css';

export default function DesktopMenu(props) {
    const menuStateClass = () => {
        return props.visible ? 'visible' : 'hidden';
    };

    const isActive = path => {
        if (window) {
            return window.location.pathname === path;
        }
        return false;
    };

    return (
        <nav
            id="DesktopMenu"
            className={`title-font ${css.container}
            ${css[menuStateClass(props)]}`}
        >
            {!isActive('/biography') ? (
                <a className={css.item} href="/biography" role="menuitem">
                    Biography
                </a>
            ) : null}
            {!isActive('/listen') ? (
                <a className={css.item} href="/listen" role="menuitem">
                    Listen
                </a>
            ) : null}
            {!isActive('/gallery') ? (
                <a className={css.item} href="/gallery" role="menuitem">
                    Gallery
                </a>
            ) : null}
            {!isActive('/diary') ? (
                <a className={css.item} href="/diary" role="menuitem">
                    Diary
                </a>
            ) : null}
            {!isActive('/contact') ? (
                <a className={css.item} href="/contact" role="menuitem">
                    Contact
                </a>
            ) : null}
        </nav>
    );
}

DesktopMenu.propTypes = {
    visible: PropTypes.bool
};

DesktopMenu.defaultProps = {
    visible: true
};
