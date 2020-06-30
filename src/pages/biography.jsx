import React from 'react';
import PropTypes from 'prop-types';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';

export default function Biography(props) {
    return (
        <div>
            <Template>
                <Menu path={props.location.pathname} />
                <Body className="white center-text body-font">
                    <h1 className="title-font large-text">Biography</h1>
                    <p>He&apos;s a big dog baritone</p>
                </Body>
            </Template>
        </div>
    );
}

Biography.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
};
