import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import css from './splashImage.module.css';

export default function SplashImage(props) {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativePath: { eq: "splash-image.jpg" } }) {
          edges {
            node {
              absolutePath
              childImageSharp {
                id
                fluid(
                  sizes: "1500px, 2000px"
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <div id="SplashImage" className={css.container}>
      <Img
        className={`${css.image} ${css[props.visiblity]}`}
        height="100vh"
        style={{ position: 'static' }}
        fluid={data.allFile.edges[0].node.childImageSharp.fluid}
      />
    </div>
  );
}
