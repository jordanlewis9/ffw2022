
    import { graphql } from 'gatsby'
  
    export const componentFragments = graphql`
       
 
      fragment Post_AllTeam on WpPost_Pageblocks_Content_AllTeam {
        
    bottomPadding
    heading
    topPadding
    peopleToDisplay {
        ... on WpPerson {
        id
        team {
            bio
            funFact
            position
            shortBio
            headshot {
            localFile {
                childImageSharp {
                gatsbyImageData(formats: WEBP)
                }
            }
            }
        }
        title
        uri
        }
    }
    
      }
     
 
      fragment Post_AwardsAndAffiliations on WpPost_Pageblocks_Content_AwardsAndAffiliations {
        
    animation
    bottomPadding
    button {
        target
        title
        url
    }
    content
    heading
    topPadding
    logos {
        link {
            target
            title
            url
        }
        logo {
        localFile {
            childImageSharp {
                gatsbyImageData
                }
            }
        }
    }
    
      }
     
 
      fragment Post_Blog on WpPost_Pageblocks_Content_Blog {
        
    animation
    paddingTop
    paddingBottom
    
      }
     
 
      fragment Post_CategoryPortfolioItems on WpPost_Pageblocks_Content_CategoryPortfolioItems {
        
    bottomPadding
            heading
            portfolioItems {
              ... on WpPortfolio {
                id
                uri
                title
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(formats: WEBP)
                      }
                    }
                  }
                }
                portfolioItem {
                  logo {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(formats: WEBP)
                      }
                    }
                  }
                }
              }
            }
            topPadding
            link {
              target
              title
              url
            }
            portfolioIndustry {
              name
              uri
              databaseId
            }
    
      }
     
 
      fragment Post_ContactUsContactForm on WpPost_Pageblocks_Content_ContactUsContactForm {
        
    paddingTop
    paddingBottom
    
      }
     
 
      fragment Post_FeaturedCaseStudy on WpPost_Pageblocks_Content_FeaturedCaseStudy {
        
    bottomPadding
    backgroundImage {
        localFile {
            childImageSharp {
                gatsbyImageData(formats: WEBP)
            }
            }
    }
    link {
        target
        title
        url
    }
    logo {
        localFile {
        childImageSharp {
            gatsbyImageData(formats: WEBP)
        }
        }
    }
    topPadding
    websiteScreenshot {
        localFile {
        childImageSharp {
            gatsbyImageData(formats: WEBP)
        }
        }
    }
    
      }
     
 
      fragment Post_FeaturedPortfolioItems on WpPost_Pageblocks_Content_FeaturedPortfolioItems {
        
    bottomPadding
    heading
    topPadding
    portfolioItems {
        ... on WpPortfolio {
          id
          uri
          title
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
    
      }
     
 
      fragment Post_FiftyFiftyOverlappingImageText on WpPost_Pageblocks_Content_FiftyFiftyOverlappingImageText {
        
        animation
        bottomPadding
        content
        heading
        image {
            localFile {
            childImageSharp {
                gatsbyImageData(formats: WEBP)
            }
            }
        }
        imageSide
        subheading
        textBackgroundColor
        textColor
        topPadding
    
      }
     
 
      fragment Post_FiftyFiftySplitImagesText on WpPost_Pageblocks_Content_FiftyFiftySplitImagesText {
        
    animation
    bottomPadding
    content
    topPadding
    imageOne {
        localFile {
        childImageSharp {
            gatsbyImageData(formats: WEBP)
        }
        }
    }
    imageTwo {
        localFile {
        childImageSharp {
            gatsbyImageData(formats: WEBP)
        }
        }
    }
    
      }
     
 
      fragment Post_FiftyFiftyTextQuote on WpPost_Pageblocks_Content_FiftyFiftyTextQuote {
        
    content
    quote
    animation
    topPadding
    bottomPadding
    
      }
     
 
      fragment Post_FiftyFiftyTextVideoOrImage on WpPost_Pageblocks_Content_FiftyFiftyTextVideoOrImage {
        
    animation
    bottomPadding
    content
    image {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    title
    topPadding
    video
    
      }
     
 
      fragment Post_FortySixtyTextImage on WpPost_Pageblocks_Content_FortySixtyTextImage {
        
    animation
    backgroundColor
    bottomPadding
    content
    image {
      localFile {
        childImageSharp {
          gatsbyImageData(formats: WEBP)
        }
      }
    }
    imageSide
    textColor
    topPadding
    
      }
     
 
      fragment Post_FullWidthImageVideo on WpPost_Pageblocks_Content_FullWidthImageVideo {
        
    animation
    bottomPadding
    image {
    altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    topPadding
    video
    
      }
     
 
      fragment Post_FullWidthText on WpPost_Pageblocks_Content_FullWidthText {
        
        animation
        contentWidth
        content
        backgroundColor
        animation
        topPadding
        bottomPadding
    
      }
     
 
      fragment Post_HomepageHero on WpPost_Pageblocks_Content_HomepageHero {
        
        content
        desktopMarginBottom
        fieldGroupName
        ghostButton {
            target
            title
            url
        }
        heading
        popoutContent
        popoutHeading
        preheading
        rightImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(formats: WEBP)
              }
            }
        }
        solidButton {
            target
            title
            url
        }
    
      }
     
 
      fragment Post_IconList on WpPost_Pageblocks_Content_IconList {
        
    animation
    bottomPadding
    heading
    topPadding
    list {
      icon {
        sourceUrl
      }
      text
    }
    
      }
     
 
      fragment Post_MiniContactForm on WpPost_Pageblocks_Content_MiniContactForm {
        
        animation
        bottomPadding
        formTitle
        heading
        subheading
        topPadding
    
      }
     
 
      fragment Post_MiniFaqs on WpPost_Pageblocks_Content_MiniFaqs {
        
    animation
    bottomPadding
    faqs {
      content
      title
    }
    faqsTitle
    heading
    subheading
    topPadding
    
      }
     
 
      fragment Post_NumberedList on WpPost_Pageblocks_Content_NumberedList {
        
    animation
    bottomPadding
    introContent
    list {
        text
    }
    topPadding
    rightImage {
        localFile {
        childImageSharp {
            gatsbyImageData
        }
        }
    }
    
      }
     
 
      fragment Post_OurWork on WpPost_Pageblocks_Content_OurWork {
        
        paddingTop
        paddingBottom
    
      }
     
 
      fragment Post_OutsideTheBoxText on WpPost_Pageblocks_Content_OutsideTheBoxText {
        
    animation
    backgroundColor
    bottomPadding
    bottomText
    content
    leftText
    textColor
    topPadding
    topText
    
      }
     
 
      fragment Post_PageHeader on WpPost_Pageblocks_Content_PageHeader {
        
    includeChecklist
    pageTitle
    checklistToShow
    
      }
     
 
      fragment Post_PointsWithLinks on WpPost_Pageblocks_Content_PointsWithLinks {
        
    animation
    bottomPadding
    heading
    points {
      text
      link {
        target
        title
        url
      }
    }
    topPadding
    
      }
     
 
      fragment Post_PolaroidPhotosText on WpPost_Pageblocks_Content_PolaroidPhotosText {
        
    animation
    bottomPadding
    content
    topPadding
    icon
    link {
        target
        title
        url
    }
    horizontalPhoto {
        caption
        localFile {
        childImageSharp {
            gatsbyImageData(formats: WEBP)
        }
        }
    }
    verticalPhotoOne {
        caption
        localFile {
        childImageSharp {
            gatsbyImageData(formats: WEBP)
        }
        }
    }
    verticalPhotoTwo {
        caption
        localFile {
        childImageSharp {
            gatsbyImageData(formats: WEBP)
        }
        }
    }
    
      }
     
 
      fragment Post_PortfolioItemsLeftTextRight on WpPost_Pageblocks_Content_PortfolioItemsLeftTextRight {
        
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
    
      }
     
 
      fragment Post_ScrollingLogos on WpPost_Pageblocks_Content_ScrollingLogos {
        
        scrollSpeed
        logos {
            link {
                title
                url
                target
            }
            logo {
                altText
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            formats: WEBP
                            height: 50
                            )
                    }
                }
            }
        }
        animation
        topPadding
        bottomPadding
    
      }
     
 
      fragment Post_Services on WpPost_Pageblocks_Content_Services {
        
    bottomPadding
    topPadding
    services {
      content
      icon {
        sourceUrl
      }
    }
    
      }
     
 
      fragment Post_ServicesTiles on WpPost_Pageblocks_Content_ServicesTiles {
        
        preheading
        heading
        button {
            url
            title
            target
        }
        tiles {
            link {
                target
                title
                url
            }
            icon {
                sourceUrl
            }
        }
        ctaButton {
            target
            title
            url
        }
        topPadding
        bottomPadding
    
      }
     
 
      fragment Post_SpacingBlock on WpPost_Pageblocks_Content_SpacingBlock {
        
    backgroundColor
    height
    
      }
     
 
      fragment Post_Statistics on WpPost_Pageblocks_Content_Statistics {
        
        preheading
        heading
        statistics {
            image {
                altText
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            formats: WEBP
                            )
                    }
                }
            }
            statistic
            label
            subheading
            content
        }
        topPadding
        bottomPadding
    
      }
     
 
      fragment Post_SupportForm on WpPost_Pageblocks_Content_SupportForm {
        
    paddingTop
    paddingBottom
    
      }
    
    `
    