// See .cache/page-templates after running dev/build
// to understand how this file ends up looking

import React, { useEffect } from 'react'
import { graphql } from 'gatsby';
import 'aos/dist/aos.css';
import GlobalContainer from '../components/global/GlobalContainer';
import PageHeader from '../components/ourWork/PageHeader';
import OurWork from '../components/ourWork/OurWork';
// import './pageTemplate.module.scss';

// ### COMPONENT IMPORTS ### DO NOT MODIFY OR MOVE THIS COMMENT ###

const PageTemplate = pageProps => {
    let AOS;
  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <GlobalContainer pageProps={pageProps}>
        <PageHeader pageHeader={pageProps.data.wpPage.pageBlocks.content[0]}></PageHeader>
        <OurWork></OurWork>
    </GlobalContainer>
  )
}

export default PageTemplate

export const query = graphql `
    query OurWork($id: String!) {
        wpPage(id: {eq: $id}) {
            seo {
                description
                title
              }
            pageBlocks {
                content {
                    ... on WpPage_Pageblocks_Content_PageHeader {
                        fieldGroupName
                        checklistToShow
                        pageTitle
                        includeChecklist
                    }
                }
            }
        }
    }
`