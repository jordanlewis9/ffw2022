import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';
import CategoryItem from './CategoryItem';
import * as styles from './categoryportfolioitems.module.scss';

const CategoryPortfolioItems = ({ heading, topPadding, bottomPadding, portfolioItems, link, portfolioIndustry }) => {
    const el = useRef();
    const [categoryItems, setCategoryItems] = useState(null);
    const [isRest, setIsRest] = useState(null);
    let $, marquee

    useEffect(() => {
        const $ = require('jquery');
        const marquee = require('jquery.marquee');
        const fetchData = async () => {
            try {
                const data = await axios.get(`${process.env.GATSBY_ROOT}/wp-json/wp/v2/portfolio?per_page=4&orderby=rand&portfolio_industry=${portfolioIndustry.databaseId}`);
                setCategoryItems(data.data);
                setIsRest(true);
            } catch (err) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(err.response.data);
                }
            }
        }

        if (!portfolioItems || portfolioItems.length < 4) {
            fetchData();
        } else {
            setCategoryItems(portfolioItems.splice(0, 4));
            setIsRest(false);
        }

        setTimeout(() => {
            const $el = $(el.current);

        $el.marquee({
            duration: 20000,
            gap: 0,
            duplicated: true,
            startVisible: true,
            delayBeforeStart: 0,
            pauseOnHover: true
        })
        }, 1000)
    }, [portfolioItems]);

    const renderLogos = () => {
        return categoryItems.map((item, index) => <Logo item={item} key={index} isRest={isRest} />)
    }

    const renderItems = () => {
        return categoryItems.map((item, index) => <CategoryItem item={item} key={index} isRest={isRest} index={index} />)
    }

    return (
        <section className={styles.categoryPortfolioItems} style={{ paddingTop: topPadding, paddingBottom: bottomPadding }}>
            <div className={`container-fluid ${styles.categoryPortfolioItemsTop}`}>
                <div className="row">
                    <div className="col-md-6 d-none d-lg-block d-xl-block">
                        <div className={styles.categoryPortfolioItemsMarquee} ref={el}>
                            <div className={styles.categoryPortfolioItemsLogos}>
                                {(categoryItems && categoryItems.length === 4) && renderLogos()}
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        {heading && <h3 className={styles.categoryPortfolioItemsHeading}>{heading}</h3>}
                    </div>
                </div>
            </div>
            <div className={styles.categoryPortfolioItemsItemsWrap}>
                {(categoryItems && categoryItems.length === 4) && renderItems()}
            </div>
            {link && <Link to={link.url} title={link.title} className={styles.categoryPortfolioItemsLink} target={link.target}>{link.title}</Link>}
        </section>
    )
}

export default CategoryPortfolioItems;