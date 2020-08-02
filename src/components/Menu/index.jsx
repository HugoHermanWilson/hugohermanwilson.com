import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import css from './index.module.css';
import 'fomantic-ui-css/components/icon.min.css';
import MobileMenu from '../MobileMenu';
import DesktopMenu from '../DesktopMenu';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
    }

    toggleMenuOpen = () => {
        this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
    };

    getCorrectHeaderTags = () => {
        if (this.props.path === '/') {
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

    render() {
        return (
            <div
                id="Menu"
                className={`title-font ${css.container} ${
                    css[this.props.visiblity]
                }`}
                ref={this.props.menuRef}
            >
                {this.getCorrectHeaderTags()}

                <div
                    className={`${css.oneLine} ${css.subHeader} ${css.alignRight} ${css.menuIcon}`}
                >
                    <Icon
                        name="bars"
                        onClick={this.toggleMenuOpen}
                        aria-haspopup="true"
                        aria-controls="MobileMenu"
                        aria-expanded={this.state.menuOpen}
                    />
                </div>
                <MobileMenu
                    toggleMenu={this.toggleMenuOpen}
                    visible={this.state.menuOpen}
                />
                <DesktopMenu />
            </div>
        );
    }
}

Menu.propTypes = {
    visiblity: PropTypes.string,
    path: PropTypes.string.isRequired,
    menuRef: PropTypes.shape({ current: null })
};

Menu.defaultProps = {
    visiblity: 'visible',
    menuRef: React.createRef()
};
