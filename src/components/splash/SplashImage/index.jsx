import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import css from './index.module.css';

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
                                fluid(sizes: "2000px, 4000px") {
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
        <div
            id="SplashImage"
            className={css.container}
            style={{ height: props.height }}
        >
            <Img
                className={`${css.image} ${css[props.visiblity]}`}
                height="100vh"
                style={{ width: '100%' }}
                fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            />
        </div>
    );
}

SplashImage.propTypes = {
    height: PropTypes.string.isRequired,
    visiblity: PropTypes.string.isRequired
};
