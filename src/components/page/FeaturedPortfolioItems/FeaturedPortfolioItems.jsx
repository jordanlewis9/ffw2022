import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PortfolioItem from './PortfolioItem';
import * as styles from './featuredportfolioitems.module.scss';

const FeaturedPortfolioItem = ({ bottomPadding, heading, topPadding, portfolioItems }) => {
    const [portfolioItemsToUse, setPortfolioItemsToUse] = useState(null);
    const [isRest, setIsRest] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`${process.env.GATSBY_ROOT}/wp-json/wp/v2/portfolio?per_page=4&orderby=rand`);
                setPortfolioItemsToUse(data.data);
            } catch (err) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(err.response);
                }
            }
        }

        if (portfolioItems?.length === 4) {
            setPortfolioItemsToUse(portfolioItems);
            setIsRest(false);
        } else {
            fetchData();
            setIsRest(true);
        }
    }, [portfolioItems]);

    const renderPortfolioItems = () => {
        if (!isRest) {
            return portfolioItemsToUse.map((item, index) => {
                return (
                    <div key={item.uri} className={styles.featuredPortfolioItemsItem} data-aos="fade-up" data-aos-delay={(index + 1) * 50}>
                        <PortfolioItem isRest={isRest} image={item.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData?.images?.fallback?.src} title={item.title} slug={item.uri} />
                    </div>
                )
            })
        } else {
            return portfolioItemsToUse.map((item, index) => {
                let slug = item.link.replace(process.env.GATSBY_ROOT, '');
                return (
                    <div key={item.slug} className={styles.featuredPortfolioItemsItem} data-aos="fade-up" data-aos-delay={(index + 1) * 50}>
                        <PortfolioItem isRest={isRest} image={item.featured_media} title={item.title.rendered} slug={slug} />
                    </div>
                )
            })
        }
    }
    
    return (
        <section className={styles.featuredPortfolioItems} style={{ paddingTop: topPadding, paddingBottom: bottomPadding }}>
            <div className={styles.featuredPortfolioItemsHeadingBox}>
                {heading && <h3 className={styles.featuredPortfolioItemsHeading}>{heading}</h3>}
                <div className={styles.featuredPortfolioItemsArrow}></div>
            </div>
            <div className={styles.featuredPortfolioItemsItemsWrap}>
                {portfolioItemsToUse?.length > 0 && renderPortfolioItems()}
            </div>
        </section>
    )
}

export default FeaturedPortfolioItem;