import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';

export default function Biography(props) {
    return (
        <div>
            <Template>
                <Menu path={props.location.pathname} />
                <Body className="white center-text body-font">
                    <h1 className="title-font large-text">Biography</h1>
                    <p>He&apos;s a big dog baritone</p>
                </Body>
            </Template>
        </div>
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
