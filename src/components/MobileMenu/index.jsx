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
            <Icon
                className={`${css.item} ${css.icon} pink`}
                name="close"
                onClick={props.toggleMenu}
                role="button"
            />
        </nav>
    );
}

MobileMenu.propTypes = {
    visible: PropTypes.string.isRequired,
    toggleMenu: PropTypes.func.isRequired
};
