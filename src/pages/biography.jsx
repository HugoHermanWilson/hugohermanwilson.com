/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Template from '../layouts/Template';
import Menu from '../components/navigation/Menu';
import Body from '../components/Body';
import BiographyList from '../components/biography/BiographyList';

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

    const oratorioSolos = props.data.allMarkdownRemark.edges.filter(edge => {
        return (
            edge.node.fields && edge.node.fields.slug.match(/solos\/oratorios/)
        );
    });

    return (
        <Template>
            <Menu path={props.location.pathname} />
            <Body className=" center-text body-font">
                <h1 className="title-font large-text d-none-desktop-only">
                    Biography
                </h1>

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
                <BiographyList
                    id="list-operas"
                    type="opera"
                    title="Operas"
                    solos={operaSolos}
                />
                <BiographyList
                    id="list-recitals"
                    type="recital"
                    title="Recitals"
                    solos={recitalSolos}
                />
                <BiographyList
                    id="list-oratorios"
                    type="oratorio"
                    title="Oratorio"
                    solos={oratorioSolos}
                />
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
                        isOratorio
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
