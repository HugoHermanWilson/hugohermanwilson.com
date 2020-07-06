import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/Head';

function Template(props) {
    return (
        <div
            style={{
                width: '100vw',
                backgroundColor: 'white',
                minHeight: '100vh'
            }}
        >
            <Head />
            {props.children}
        </div>
    );
}

export default Template;

Template.propTypes = {
    children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
        .isRequired
};
