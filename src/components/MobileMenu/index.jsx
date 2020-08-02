import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import css from './index.module.css';
import 'fomantic-ui-css/components/icon.min.css';

export default function MobileMenu(props) {
    const menuStateClass = () => {
        return props.visible ? 'visible' : 'hidden';
    };

    return (
        <nav
            id="MobileMenu"
            className={`title-font ${css.container} ${
                css[menuStateClass(props)]
            }`}
            role="menu"
        >
            <Icon
                className={`${css.item} ${css.icon}`}
                name="close"
                onClick={props.toggleMenu}
                role="button"
            />
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

MobileMenu.propTypes = {
    visible: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
};
