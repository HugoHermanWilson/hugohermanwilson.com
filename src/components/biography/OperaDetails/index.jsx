/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.css';

export default function OperaDetails(props) {
    const isOpera = () => {
        return !!props.data.frontmatter.isOpera;
    };

    if (isOpera()) {
        return (
            <div
                id={`BiographyItem-opera-${props.index}`}
                className={css.container}
            >
                <h5 className={css.title}>{props.data.frontmatter.role}</h5>
                <p className={css.opera}>{props.data.frontmatter.opera}</p>
                <p className={css.company}>{props.data.frontmatter.company}</p>
            </div>
        );
    }
    // bad data passed in
    return null;
}

OperaDetails.propTypes = {
    index: PropTypes.number.isRequired,
    data: PropTypes.shape({
        frontmatter: PropTypes.shape({
            isOpera: PropTypes.bool,
            role: PropTypes.string.isRequired,
            opera: PropTypes.string.isRequired
        }),
        fields: PropTypes.shape({
            slug: PropTypes.string.isRequired
        })
    }).isRequired
};
