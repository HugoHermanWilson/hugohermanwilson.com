import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.css';

const Divider = ({ text }) => {
    return <div className={css.text}>{text}</div>;
};

export default Divider;
