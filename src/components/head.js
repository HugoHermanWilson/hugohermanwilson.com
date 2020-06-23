import React from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

export default function Head() {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        return (
          <Helmet>
            <meta charSet="utf-8" />
            <title>{data.site.siteMetadata.title}</title>

            <link rel="canonical" href="http://www.hugohermanwilson.com" />
          </Helmet>
        );
      }}
    />
  );
}
