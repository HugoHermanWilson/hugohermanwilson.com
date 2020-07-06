/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';

function Events(props) {
    const events = props.data.allMarkdownRemark.edges;

    return (
        <Template>
            <Menu path={props.location.pathname} />
            <Body className=" center-text body-font">
                <h1 className="title-font large-text">Events</h1>
                {events.map(({ node }) => {
                    const title = node.frontmatter.name;
                    const venue = node.frontmatter.venue;
                    return (
                        <div key={node.fields.slug}>
                            <h3>{title}</h3>
                            <small>{node.frontmatter.date}</small>
                            <p>Venue: {venue}</p>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: node.html
                                }}
                            />
                        </div>
                    );
                })}
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
                        date(formatString: "DD MMMM, YYYY")
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
