const { createFilePath } = require('gatsby-source-filesystem');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

/* eslint-disable-next-line no-undef */
Element = typeof Element === 'undefined' ? function() {} : Element;

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value
        });
    }
};
