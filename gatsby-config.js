module.exports = {
    siteMetadata: {
        title: 'Hugo Herman-Wilson',
        author: 'Hugo Herman-Wilson'
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static`,
                name: 'static'
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                            wrapperStyle:
                                'margin-left:10px; margin-right:0; margin-bottom:10px; margin-top:10px;box-shadow:0;',
                            backgroundColor: 'black',
                            disableBgImage: true
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants'
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GATSBY_GA_TRACKING_ID
            }
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`
    ]
};
