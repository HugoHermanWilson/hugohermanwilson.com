import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/Head';

function Template(props) {
    return (
        <div>
            <Head />
            {props.children}
        </div>
    );
}

export default Template;

Template.propTypes = {
    children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
};

Template.defaultProps = {
    children: { message: 'child JSX not found' }
};
