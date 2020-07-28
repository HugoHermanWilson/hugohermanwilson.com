import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';
import HybridGallery from '../components/HybridGallery';

export default function GalleryPage(props) {
    const captionsObject = props.data.allMarkdownRemark.edges.reduce(
        (accumulator, edge) => {
            accumulator[edge.node.frontmatter.imageFilename] =
                edge.node.frontmatter.caption;
            return accumulator;
        },
        {}
    );

    const photos = props.data.allFile.edges.map(element => {
        const node = element.node;
        return {
            src: node.childImageSharp.fluid.src,
            width: parseInt(node.childImageSharp.fluid.presentationWidth, 10),
            height: parseInt(node.childImageSharp.fluid.presentationHeight, 10),
            title: captionsObject[node.name] ? captionsObject[node.name] : '',
            key: node.id,
            srcSet: node.childImageSharp.fluid.srcSet
        };
    });

    return (
        <Template>
            <Menu path={props.location.pathname} />
            <Body className=" center-text body-font">
                <h1 className="title-font large-text">Gallery</h1>
                <HybridGallery photos={photos} />
            </Body>
        </Template>
    );
}

export const imagesQuery = graphql`
    query ImageQuery {
        allFile(
            filter: {
                name: { ne: "splash-image" }
                absolutePath: { regex: "//assets/" }
            }
        ) {
            edges {
                node {
                    id
                    absolutePath
                    name
                    childImageSharp {
                        fluid {
                            originalName
                            srcSet
                            src
                            presentationWidth
                            presentationHeight
                            sizes
                        }
                    }
                }
            }
        }
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "//pages/image-captions/" } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        imageFilename
                        caption
                    }
                }
            }
        }
    }
`;

GalleryPage.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired,
    data: PropTypes.shape({
        allFile: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        id: PropTypes.string,
                        absolutePath: PropTypes.string,
                        name: PropTypes.string,
                        childImageSharp: PropTypes.shape({
                            fluid: PropTypes.shape({
                                originalName: PropTypes.string,
                                srcSet: PropTypes.string,
                                src: PropTypes.string,
                                presentationWidth: PropTypes.number,
                                presentationHeight: PropTypes.number,
                                sizes: PropTypes.string
                            })
                        })
                    })
                })
            )
        }),
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        id: PropTypes.string,
                        frontmatter: PropTypes.shape({
                            imageFilename: PropTypes.string,
                            caption: PropTypes.string
                        })
                    })
                })
            )
        })
    }).isRequired
};
