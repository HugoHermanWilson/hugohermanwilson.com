/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import moment from 'moment';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';
import Event from '../components/Event';

function Diary(props) {
    const renderFutureEventList = () => {
        const events = props.data.allMarkdownRemark.edges;

        const eventsJSX = events.map(({ node }) => {
            if (!moment(node.frontmatter.date).isBefore(moment(), 'day')) {
                // event is in the future or today
                return (
                    <Event
                        slug={node.fields.slug}
                        title={node.frontmatter.name}
                        date={node.frontmatter.date}
                        venue={node.frontmatter.venue}
                        externalLink={node.frontmatter.externalLink}
                        html={node.html}
                    />
                );
            }
        });
        return eventsJSX;
    };

    const renderPastEventList = () => {
        const events = props.data.allMarkdownRemark.edges;

        const eventsJSX = events.map(({ node }) => {
            if (moment(node.frontmatter.date).isBefore(moment(), 'day')) {
                // event is in the past
                return (
                    <Event
                        slug={node.fields.slug}
                        title={node.frontmatter.name}
                        date={node.frontmatter.date}
                        venue={node.frontmatter.venue}
                        externalLink={node.frontmatter.externalLink}
                        html={node.html}
                    />
                );
            }
        });

        return eventsJSX;
    };

    return (
        <Template>
            <Menu path={props.location.pathname} />
            <Body className=" center-text body-font">
                <h1 className="title-font large-text" key="diary-h1">
                    Diary
                </h1>
                {renderFutureEventList()}
                {renderPastEventList()}
            </Body>
        </Template>
    );
}

export default Diary;

export const eventsQuery = graphql`
    query eventsQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fileAbsolutePath: { regex: "/pages/events/" } }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    html
                    frontmatter {
                        name
                        date
                        venue
                        externalLink
                    }
                }
            }
        }
    }
`;

Diary.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired,
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            name: PropTypes.string,
                            venue: PropTypes.string,
                            url: PropTypes.string
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string
                        }),
                        html: PropTypes.string
                    })
                })
            )
        })
    }).isRequired
};
