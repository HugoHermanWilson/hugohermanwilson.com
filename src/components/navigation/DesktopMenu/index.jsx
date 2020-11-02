import React from 'react';
import { Link } from 'gatsby';
import css from './index.module.css';

export default function DesktopMenu() {
    return (
        <nav id="DesktopMenu" className={`title-font ${css.container}`}>
            <Link
                to="/biography"
                activeClassName={css.active}
                className={css.item}
                role="menuitem"
            >
                Biography
            </Link>
            <Link
                to="/listen"
                activeClassName={css.active}
                className={css.item}
                role="menuitem"
            >
                Listen
            </Link>
            <Link
                to="/gallery"
                activeClassName={css.active}
                className={css.item}
                role="menuitem"
            >
                Gallery
            </Link>
            <Link
                to="/diary"
                activeClassName={css.active}
                className={css.item}
                role="menuitem"
            >
                Diary
            </Link>
            <Link
                to="/contact"
                activeClassName={css.active}
                className={css.item}
                role="menuitem"
            >
                Contact
            </Link>
        </nav>
    );
}
