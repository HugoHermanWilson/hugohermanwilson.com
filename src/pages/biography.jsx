/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';
import BiographyItem from '../components/biography/BiographyItem';

export default function Biography(props) {
    const biographyText = props.data.allMarkdownRemark.edges.filter(edge => {
        return (
            edge.node.fields &&
            edge.node.fields.slug === '/biography/biography/'
        );
    })[0].node;

    const operaSolos = props.data.allMarkdownRemark.edges.filter(edge => {
        return edge.node.fields && edge.node.fields.slug.match(/solos\/opera/);
    });

    const recitalSolos = props.data.allMarkdownRemark.edges.filter(edge => {
        return (
            edge.node.fields && edge.node.fields.slug.match(/solos\/recitals/)
        );
    });

    const solosList = solos => {
        return solos.map(({ node }, index) => {
            return (
                <BiographyItem
                    key={node.fields.slug}
                    data={node}
                    index={index + 1}
                />
            );
        });
    };

    return (
        <Template>
            <Menu path={props.location.pathname} />
            <Body className=" center-text body-font">
                <h1 className="title-font large-text">Biography</h1>

                {/* HTML from /src/pages/biography/biography.md  */}
                <div className="Biography">
                    {/* <Headshot /> */}
                    <div
                        className="left-text"
                        dangerouslySetInnerHTML={{
                            __html: biographyText.html
                        }}
                    />
                </div>
                <p>Recent solo highlights include:</p>
                <div className="responsiveColumns">
                    {/* Components made from /src/pages/biography/solos/operas  */}
                    <div className="left-text responsiveColumn">
                        <h3 className="title-font center-text">Operas</h3>
                        {solosList(operaSolos)}
                    </div>
                    {/* Components made from /src/pages/biography/solos/recitals  */}
                    <div className="left-text responsiveColumn">
                        <h3 className="title-font center-text">Recitals</h3>
                        {solosList(recitalSolos)}
                    </div>
                </div>
            </Body>
        </Template>
    );
}

export const biographyQuery = graphql`
    query biographyQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/pages/biography/" } }
            sort: { order: DESC, fields: fileAbsolutePath }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        isOpera
                        role
                        opera
                        isRecital
                        recital
                        company
                    }
                    html
                }
            }
        }
    }
`;

Biography.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired,
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
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
