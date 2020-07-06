import React from 'react';
import PropTypes from 'prop-types';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';

export default function Gallery(props) {
    return (
        <Template>
            <Menu path={props.location.pathname} />
            <Body className=" center-text body-font">
                <h1 className="title-font large-text">Gallery</h1>
                <p>Look at the big dog baritone</p>
            </Body>
        </Template>
    );
}

Gallery.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
};
