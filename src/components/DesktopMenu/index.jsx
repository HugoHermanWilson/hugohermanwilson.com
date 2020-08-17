import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.css';

export default function DesktopMenu(props) {
    const menuStateClass = () => {
        return props.visible ? 'visible' : 'hidden';
    };

    const isActive = path => {
        if (typeof window !== 'undefined') {
            return new RegExp(path).test(window.location.pathname);
        }
        return false;
    };

    return (
        <nav
            id="DesktopMenu"
            className={`title-font ${css.container}
            ${css[menuStateClass(props)]}`}
        >
            <a
                className={`${css.item} ${
                    isActive('biography') ? 'd-none' : ''
                }`}
                href="biography"
                role="menuitem"
            >
                Biography
            </a>

            <a
                className={`${css.item} ${isActive('listen') ? 'd-none' : ''}`}
                href="listen"
                role="menuitem"
            >
                Listen
            </a>

            <a
                className={`${css.item} ${isActive('gallery') ? 'd-none' : ''}`}
                href="gallery"
                role="menuitem"
            >
                Gallery
            </a>

            <a
                className={`${css.item} ${isActive('diary') ? 'd-none' : ''}`}
                href="diary"
                role="menuitem"
            >
                Diary
            </a>

            <a
                className={`${css.item} ${isActive('contact') ? 'd-none' : ''}`}
                href="contact"
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
