import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/Head';

function SplashLayout(props) {
    const { children } = props;

    return (
        <div id="SplashPage" className="splash">
            <Head />
            {children}
        </div>
    );
}

export default SplashLayout;

SplashLayout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
        .isRequired
};
