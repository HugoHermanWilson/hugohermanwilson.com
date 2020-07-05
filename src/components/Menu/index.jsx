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

    getCorrectHeaderTag = () => {
        if (this.props.path === '/') {
            return (
                <h1 className={`black-background ${css.mainHeader}`}>
                    <a href="/">Hugo Herman-Wilson</a>
                </h1>
            );
        }
        return (
            <h2 className={`black-background ${css.mainHeader}`}>
                <a href="/">Hugo Herman-Wilson</a>
            </h2>
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
                {this.getCorrectHeaderTag()}
                <h2
                    className={`${css.oneLine} ${css.subHeader} ${css.baritone}`}
                >
                    Baritone
                </h2>
                <h2
                    className={`${css.oneLine} ${css.subHeader} ${css.alignRight} ${css.menuIcon} pink`}
                >
                    <Icon name="bars" onClick={this.toggleMenuOpen} />
                </h2>
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
