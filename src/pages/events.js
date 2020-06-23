import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';

class EventsPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const events = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        {events.map(({ node }) => {
          const title = get(node, 'frontmatter.name');
          const venue = get(node, 'frontmatter.venue');
          return (
            <div key={node.fields.slug}>
              <h3>{title}</h3>
              <small>{node.frontmatter.date}</small>
              <p>Venue: {venue}</p>
              <p dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default EventsPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
