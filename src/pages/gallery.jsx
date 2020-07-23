import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';
// import ExampleDynamicLoading from '../components/ExampleDynamicLoading';
// import ExampleWithLightbox from '../components/ExampleWithLightbox';
import HybridGallery from '../components/HybridGallery';

export default function GalleryPage(props) {
    const captionsData =
        props.data.allMarkdownRemark.edges[0].node.rawMarkdownBody;
    const captionsObject = JSON.parse(captionsData.replace('\n', ''));

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

    console.log(photos);
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

GalleryPage.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
};

export const imagesQuery = graphql`
    query ImageQuery {
        allFile(
            filter: {
                absolutePath: { regex: "//pages/images/" }
                ext: { ne: ".md" }
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
            filter: { fileAbsolutePath: { regex: "//pages/images/" } }
        ) {
            edges {
                node {
                    id
                    rawMarkdownBody
                }
            }
        }
    }
`;
