module.exports = {
  siteMetadata: {
    title: 'Couple Code Therapy',
    description: 'Couple code therapy',
    siteUrl: 'https://couplecodetherapy.com'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 690
            }
          },
          "gatsby-remark-responsive-iframe",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers"
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-117937468-3",
        anonymize: true,
      },
    },
    'gatsby-plugin-sitemap',
  ]
}
