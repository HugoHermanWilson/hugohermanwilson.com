/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';
import Event from '../components/Event';

function Events(props) {
    const renderEventList = () => {
        const events = props.data.allMarkdownRemark.edges;

        return events.map(({ node }) => {
            return (
                <Event
                    slug={node.fields.slug}
                    title={node.frontmatter.name}
                    date={node.frontmatter.date}
                    venue={node.frontmatter.venue}
                    html={node.html}
                />
            );
        });
    };

    return (
        <Template>
            <Menu path={props.location.pathname} />
            <Body className=" center-text body-font">
                <h1 className="title-font large-text">Events</h1>
                {renderEventList()}
            </Body>
        </Template>
    );
}

export default Events;

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
                    }
                }
            }
        }
    }
`;

Events.propTypes = {
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
