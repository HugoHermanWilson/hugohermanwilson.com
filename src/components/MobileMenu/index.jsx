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
        >
            <Icon
                className={`${css.item} ${css.icon}`}
                name="close"
                onClick={props.toggleMenu}
                role="button"
            />
            <a className={css.item} href="/biography">
                Biography
            </a>
            <a className={css.item} href="/listen">
                Listen
            </a>
            <a className={css.item} href="/gallery">
                Gallery
            </a>
            <a className={css.item} href="/diary">
                Diary
            </a>
            <a className={css.item} href="/contact">
                Contact
            </a>
        </nav>
    );
}

MobileMenu.propTypes = {
    visible: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
};
