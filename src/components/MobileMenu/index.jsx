import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
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
            <Link to="/biography" className={css.item} role="menuitem">
                Biography
            </Link>
            <Link to="/listen" className={css.item} role="menuitem">
                Listen
            </Link>
            <Link to="/gallery" className={css.item} role="menuitem">
                Gallery
            </Link>
            <Link to="/diary" className={css.item} role="menuitem">
                Diary
            </Link>
            <Link to="/contact" className={css.item} role="menuitem">
                Contact
            </Link>
        </nav>
    );
}

MobileMenu.propTypes = {
    visible: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
};
