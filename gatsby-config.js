module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL || `http://headless-forefront-2022.flywheelsites.com/graphql`,
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
        uri: 'http://ff2022.local/graphql'
      }
    }
  ],
}
