/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';

function Events(props) {
    const events = props.data.allMarkdownRemark.edges;

    return (
        <div>
            <Template>
                <Menu />
                <Body className="white center-text body-font">
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
        </div>
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
            filter: { fileAbsolutePath: { regex: "/pages/" } }
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
