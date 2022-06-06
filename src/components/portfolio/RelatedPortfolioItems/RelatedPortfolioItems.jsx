import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import PortfolioItem from './PortfolioItem';
import * as styles from './relatedportfolioitems.module.scss';

const RelatedPortfolioItems = ({ relatedPortfolios }) => {
    const { bottomPadding, heading, portfolioIndustry, portfolioItems, topPadding } = relatedPortfolios;
    const [relatedItems, setRelatedItems] = useState(null);
    const [isRest, setIsRest] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`${process.env.GATSBY_ROOT}/wp-json/wp/v2/portfolio?per_page=4&portfolio_industry=${portfolioIndustry.databaseId}&orderby=rand`);
                setIsRest(true);
                setRelatedItems(data.data);
            } catch (err) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(err.response.data);
                }
            }
        }

        if (portfolioItems && portfolioItems.length === 4) {
            setRelatedItems(portfolioItems);
        } else {
            fetchData();
        }
    }, [])

    const renderPortfolioItems = () => {
        return relatedItems.map((item, index) => {
            return (
                    <PortfolioItem key={index} item={item} isRest={isRest} index={index} />
            )
        })
    }

    return (
        <section className={styles.relatedPortfolioItems} style={{ paddingTop: topPadding, paddingBottom: bottomPadding }}>
            {heading && 
            <h3 className={styles.relatedPortfolioItemsHeading}>
                {heading}
            </h3>
            }
            <div className={styles.relatedPortfolioItemsItemsWrap}>
                {relatedItems && renderPortfolioItems()}
            </div>
            <Link to="/our-work" className={styles.relatedPortfolioItemsLink} title="Our Work">
                Back to Our Work
            </Link>
        </section>
    )
}

export default RelatedPortfolioItems;