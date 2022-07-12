module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL || `https://headless-forefront-2022.flywheelsites.com/graphql`,
        auth: {
          htaccess: {
            username: process.env.HTTPBASICAUTH_USERNAME,
            password: process.env.HTTPBASICAUTH_PASSWORD,
          }
        }
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
        uri: process.env.WPGRAPHQL_URL || `https://headless-forefront-2022.flywheelsites.com/graphql`
      }
    }
  ],
}
