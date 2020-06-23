import React from 'react';
import css from './mobileMenu.module.css';
import 'fomantic-ui-css/components/icon.min.css';
import { Icon } from 'semantic-ui-react';

export default function MobileMenu(props) {

    const menuStateClass = (props) => {
        return props.visible ? 'visible' : 'hidden';
    }

    return (
        <nav
            id="MobileMenu"
            className={`title-font ${css.container} ${
                css[menuStateClass(props)]
            }`}
        >
            <a className={css.item}>Biography</a>
            <a className={css.item}>Listen</a>
            <a className={css.item}>Gallery</a>
            <a className={css.item}>Events</a>
            <a className={css.item}>Contact</a>
            <Icon
                className={`${css.item} ${css.icon} pink`}
                name="close"
                onClick={props.toggleMenu}
            />
        </nav>
    );
}
