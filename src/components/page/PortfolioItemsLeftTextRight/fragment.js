module.exports = () => {
    return `
        content
        backgroundImage {
            altText
            localFile {
                childImageSharp {
                    gatsbyImageData(formats: WEBP)
                  }
            }
        }
        topPadding
        bottomPadding
        portfolioItems {
            ... on WpPortfolio {
              id
              content
              title
              uri
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(formats: WEBP)
                    }
                  }
                }
              }
            }
          }
    `
}