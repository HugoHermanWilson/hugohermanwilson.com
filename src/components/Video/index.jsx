import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.css';

const Video = ({ data, height }) => {
    const node = data.node;
    const title = node.frontmatter.title;
    const html = node.html;
    return (
        <div>
            <p>{title}</p>
            <div
                style={{ height, width: '100%' }}
                className={css.ytIframe}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: html
                }}
            />
        </div>
    );
};

export default Video;

Video.propTypes = {
    data: PropTypes.shape({
        node: PropTypes.shape({
            frontmatter: PropTypes.shape({
                title: PropTypes.string
            }),
            html: PropTypes.string
        })
    }).isRequired,
    height: PropTypes.string.isRequired
};
