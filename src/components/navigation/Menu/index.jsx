import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import css from './index.module.css';
import 'fomantic-ui-css/components/icon.min.css';
import MobileMenu from '../MobileMenu';
import DesktopMenu from '../DesktopMenu';

const Menu = props => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };

    const getCorrectHeaderTags = () => {
        if (props.path === '/') {
            return (
                <>
                    <h1 className={`${css.mainHeader}`}>
                        <a href="/">Hugo Herman-Wilson</a>
                    </h1>
                    <h2
                        className={`${css.oneLine} ${css.subHeader} ${css.baritone}`}
                    >
                        Baritone
                    </h2>
                </>
            );
        }
        return (
            <>
                <p className={`${css.mainHeader}`}>
                    <a href="/">Hugo Herman-Wilson</a>
                </p>
                <p
                    className={`${css.oneLine} ${css.subHeader} ${css.baritone}`}
                >
                    Baritone
                </p>
            </>
        );
    };

    return (
        <div
            id="Menu"
            className={`title-font ${css.container} ${css[props.visiblity]}`}
            ref={props.menuRef}
        >
            {getCorrectHeaderTags()}

            <div
                className={`${css.oneLine} ${css.subHeader} ${css.alignRight} ${css.menuIcon}`}
            >
                <Icon
                    name="bars"
                    onClick={toggleMenuOpen}
                    aria-haspopup="true"
                    aria-controls="MobileMenu"
                    aria-expanded={menuOpen}
                />
            </div>
            <MobileMenu toggleMenu={toggleMenuOpen} visible={menuOpen} />
            <DesktopMenu />
        </div>
    );
};

export default Menu;

Menu.propTypes = {
    visiblity: PropTypes.string,
    path: PropTypes.string.isRequired,
    menuRef: PropTypes.shape({ current: null })
};

Menu.defaultProps = {
    visiblity: 'visible',
    menuRef: React.createRef()
};
