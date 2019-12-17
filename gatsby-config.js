require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `aestrro`,
                short_name: `aestrro`,
                background_color: `#030303`,
                theme_color: `#030303`,
                display: `standalone`,
                // icon: `src/images/favicon.png`,
                start_url: `/`,
            },
        },
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                trackingId: process.env.GOOGLE_TRACKING_ID,
                head: false,
                anonymize: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Expletus Sans`, `Basic`],
            },
        },
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: 'https://www.aestrro.com',
                sitemap: 'https://www.aestrro.com/sitemap.xml',
                env: {
                    development: {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                    },
                    production: {
                        policy: [{ userAgent: '*', allow: '/' }],
                    },
                },
            },
        },
        `gatsby-plugin-sass`,
    ],
}
