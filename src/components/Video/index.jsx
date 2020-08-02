import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.css';

const Video = ({ data }) => {
    const node = data.node;
    const title = node.frontmatter.title;
    const slug = node.fields.slug;
    const html = node.html;
    return (
        <div key={slug}>
            <p>{title}</p>
            <div
                className={css.ytIframe}
                dangerouslySetInnerHTML={{
                    __html: html
                }}
            />
        </div>
    );
};

export default Video;
