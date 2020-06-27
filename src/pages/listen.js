import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Template from '../layouts/Template';
import Menu from '../components/Menu.js';
import Body from '../components/Body.js';

export default function Listen(props) {
    const videos = get(props, 'data.allMarkdownRemark.edges');

    return (
        <div>
            <Template>
                <Menu />
                <Body className="white center-text">
                    <h1 className="title-font large-text">Listen</h1>
                    <div id="Videos">
                        {videos.map(({node}) => {
                            const description = get(
                                node,
                                'frontmatter.description'
                            );
                            const slug = get(
                                node,
                                'fields.slug'
                            );
                            const html = get(
                                node,
                                'html'
                            );

                            return (
                                <div key={slug}>
                                    <p>{description}</p>
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
                               description
                           }
                       }
                   }
               }
           }
       `;
