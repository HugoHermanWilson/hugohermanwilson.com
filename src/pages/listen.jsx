/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Template from '../layouts/Template';
import Menu from '../components/navigation/Menu';
import Body from '../components/Body';
import VideoList from '../components/VideoList';

export default function Listen(props) {
    const videos = props.data.allMarkdownRemark.edges;

    return (
        <Template>
            <Menu path={props.location.pathname} />
            <Body className=" center-text body-font">
                <h1 className="title-font large-text">Listen</h1>
                <VideoList videos={videos} />
            </Body>
        </Template>
    );
}

export const videosQuery = graphql`
    query VideosQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "pages/videos/" } }
            sort: { order: ASC, fields: fields___slug }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    html
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;

Listen.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired,
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired
                        })
                    })
                })
            )
        })
    }).isRequired
};
