/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';

export default function Listen(props) {
    const videos = props.data.allMarkdownRemark.edges;

    return (
        <div>
            <Template>
                <Menu />
                <Body className="white center-text body-font">
                    <h1 className="title-font large-text">Listen</h1>
                    <div id="Videos">
                        {videos.map(({ node }) => {
                            const title = node.frontmatter.title;
                            const slug = node.fields.slug;
                            const html = node.html;

                            return (
                                <div key={slug}>
                                    <p>{title}</p>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: html
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </Body>
            </Template>
        </div>
    );
}

export const videosQuery = graphql`
    query VideosQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/videos/" } }
            sort: { order: ASC, fields: fields___slug }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    html
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;
