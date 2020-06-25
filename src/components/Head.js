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
                <html lang="en" />
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GA_TRACKING_ID}`}
                />
                <script>{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.GATSBY_GA_TRACKING_ID}');`}</script>
                <meta charSet="utf-8" />
                <title>{data.site.siteMetadata.title}</title>
                <meta
                    name="description"
                    content="Hugo Herman-Wilson is a British Baritone based in London"
                />
                <meta
                    name="keywords"
                    content="baritone, singer, opera, opera singer, contemporary opera, singer London, baritone London"
                />
                <script type="application/ld+json">
                    {`{
                    "@context": "http://schema.org",
                    "@type": "Person",
                    "email": "mailto:${process.env.GATSBY_EMAIL}",
                    "jobTitle": "Baritone Opera Singer",
                    "name": "Hugo Herman-Wilson",
                    "url": "http://www.hugohermanwilson.com",
                    "sameAs": ["https://twitter.com/hugobaritone"]\n}`}
                </script>
                <link rel="canonical" href="https://www.hugohermanwilson.com" />
            </Helmet>
        );
      }}
    />
  );
}
