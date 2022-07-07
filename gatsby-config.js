module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://headless-forefront-2022.local/graphql`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@import "${__dirname}/src/styles/abstracts";`
      }
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: `http://headless-forefront-2022.local/graphql`
      }
    }
  ],
}
