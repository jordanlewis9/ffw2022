import React, { useState, useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import axios from 'axios';
import Rellax from 'rellax';
import PortfolioItem from './PortfolioItem';
import * as styles from './portfolioitemslefttextright.module.scss';

const PortfolioItemsLeftTextRight = ({ content, backgroundImage, topPadding, bottomPadding, portfolioItems }) => {
    const leftPillarRef = useRef();
    const rightPillarRef = useRef();
    let $, marquee;
    const image = backgroundImage?.localFile?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
    // const rellaxRef = useRef();
    const [portfolioItemsToUse, setPortfolioItemsToUse] = useState(null);
    const [isRest, setIsRest] = useState(null);
    const [leftPillar, setLeftPillar] = useState(null);
    const [rightPillar, setRightPillar] = useState(null);

    const data = useStaticQuery(graphql`
    query AllPortfolioQuery {
        allWpPortfolio {
          nodes {
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
    `);

    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const items = await axios.get(`${process.env.GATSBY_ROOT}/wp-json/wp/v2/portfolio?orderby=rand&per_page=5`);
        //         setPortfolioItemsToUse(items.data);
        //         setIsRest(true);
        //     } catch (err) {
        //         if (process.env.NODE_ENV === 'development') {
        //             console.error(err.response.data);
        //         }
        //     }
        // }

        // if (portfolioItemsToUse === null) {
        //     if (portfolioItems?.length === 5) {
        //         setPortfolioItemsToUse(portfolioItems);
        //         setIsRest(false);
        //     } else {
        //         fetchData();
        //     }
        // } else {
        let leftArray = [];
        let rightArray = [];

        for (let i = 0; i < data.allWpPortfolio.nodes.length; i++) {
            if (i === 0) {
                leftArray.push(data.allWpPortfolio.nodes[0]);
            } else if (i % 2 === 1) {
                rightArray.push(data.allWpPortfolio.nodes[i]);
            } else {
                leftArray.push(data.allWpPortfolio.nodes[i]);
            }
        }

        if (leftArray.length > 0) {
            setLeftPillar(leftArray);
        }

        if (rightArray.length > 0) {
            setRightPillar(rightArray);
        }

        // new Rellax(rellaxRef.current, {
        //         speed: 2,
        //         center: true,
        //         wrapper: null,
        //         round: true,
        //         vertical: true,
        //         horizontal: false
        //     // });
        // })

        setTimeout(() => {
            const $ = require('jquery');
            const marquee =  require('jquery.marquee');
            const $leftPillarRef = $(leftPillarRef.current);
            const $rightPillarRef = $(rightPillarRef.current);

            $leftPillarRef.marquee({
                duration: 100000,
                gap: 0,
                duplicated: true,
                startVisible: true,
                pauseOnHover: true,
                direction: 'down'
            })

            $rightPillarRef.marquee({
                duration: 100000,
                gap: 0,
                duplicated: true,
                startVisible: true,
                pauseOnHover: true,
                direction: 'up'
            })
        }, 100);

        
    }, []);

    console.log(leftPillar);
    console.log(rightPillar);

    const renderPortfolioItems = (items) => {
        if (isRest) {
            return items.map(item => (
                <PortfolioItem key={item.link} isRest={isRest} image={item.featured_media} slug={item.link} title={item.title.rendered} />
            ))
        } else {
            return items.map(item => (
                <PortfolioItem key={item.uri} isRest={isRest} image={item.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData?.images?.fallback?.src} slug={item.uri} title={item.title} />
            ))
        }
    }

    return (
        <div className={`${styles.portfolioText} bg-cover`} style={{ backgroundImage: image && `url('${image}')`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className={`col-md-6 ${styles.portfolioTextContentCol}`} dangerouslySetInnerHTML={{ __html: content }} data-aos="fade-in">
                        
                    </div>
                    <div className={`col-md-6 ${styles.portfolioTextPortfolioCol}`} >
                        {/* {portfolioItemsToUse?.length > 0 && <div className={`${styles.portfolioTextPortfolioWrap} rellax`} ref={rellaxRef}>
                            {portfolioItemsToUse?.length > 0 && renderPortfolioItems(portfolioItemsToUse)}
                        </div>} */}
                        {/* <div className={styles.portfolioTextPortfolioWrap}> */}
                            {leftPillar?.length > 0 && <div className={styles.portfolioTextLeftPillar} ref={leftPillarRef}>
                                {renderPortfolioItems(leftPillar)}
                            </div>}
                            {rightPillar?.length > 0 && <div className={styles.portfolioTextRightPillar} ref={rightPillarRef}>
                                {renderPortfolioItems(rightPillar)}
                            </div>}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItemsLeftTextRight;