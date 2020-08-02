import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import css from './index.module.css';

const NoEvent = () => {
    return (
        <div className={css.container}>
            <Icon name="grin beam sweat outline" />
            <p>Nothing to display</p>
        </div>
    );
};

export default NoEvent;
