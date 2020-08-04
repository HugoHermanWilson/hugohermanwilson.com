import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.css';

export default function DesktopMenu(props) {
    const menuStateClass = () => {
        return props.visible ? 'visible' : 'hidden';
    };

    const isActive = path => {
        return window.location.pathname === path;
    };

    return (
        <nav
            id="DesktopMenu"
            className={`title-font ${css.container}
            ${css[menuStateClass(props)]}`}
        >
            <a
                className={`${css.item} ${
                    isActive('/biography') ? css.active : ''
                }`}
                href="/biography"
                role="menuitem"
            >
                Biography
            </a>
            <a
                className={`${css.item} ${
                    isActive('/listen') ? css.active : ''
                }`}
                href="/listen"
                role="menuitem"
            >
                Listen
            </a>
            <a
                className={`${css.item} ${
                    isActive('/gallery') ? css.active : ''
                }`}
                href="/gallery"
                role="menuitem"
            >
                Gallery
            </a>
            <a
                className={`${css.item} ${
                    isActive('/diary') ? css.active : ''
                }`}
                href="/diary"
                role="menuitem"
            >
                Diary
            </a>
            <a
                className={`${css.item} ${
                    isActive('/contact') ? css.active : ''
                }`}
                href="/contact"
                role="menuitem"
            >
                Contact
            </a>
        </nav>
    );
}

DesktopMenu.propTypes = {
    visible: PropTypes.bool
};

DesktopMenu.defaultProps = {
    visible: true
};
