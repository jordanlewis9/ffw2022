import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import * as styles from './logo.module.scss';

const Logo = ({ item, isRest }) => {
    const image = item?.portfolioItem?.logo?.localFile?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
    const [itemLogo, setItemLogo] = useState(null);
    const [hasLogo, setHasLogo] = useState(null);
    const [itemLink, setItemLink] = useState(null);
    const [itemTitle, setItemTitle] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`${process.env.GATSBY_ROOT}/wp-json/wp/v2/media?include=${item.acf.logo}`);

                if (data.data.length > 0) {
                    setItemLogo(data.data[0].source_url);
                } else {
                    setHasLogo(false);
                }
            } catch(err) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(err.response.data);
                }
            }
        }

        if (isRest) {
            fetchData();
            setHasLogo(true);
        } else if (image) {
            setItemLogo(image);
            setHasLogo(true);
        } else {
            setHasLogo(false);
        }

        if (isRest) {
            setItemLink(item?.link?.replace(process.env.GATSBY_ROOT, ''));
            setItemTitle(item?.title?.rendered);
        } else {
            setItemLink(item?.uri);
            setItemTitle(item?.title);
        }
    }, [isRest, item]);

    const renderLogo = () => {
        return (
            <div className={styles.categoryPortfolioItemsLogoWrap}>
                <Link to={itemLink} className={styles.categoryPortfolioItemsLogoLink} target="_self" title={itemTitle}>
                    <img src={itemLogo} alt={`${itemTitle} logo`} className={styles.categoryPortfolioItemsLogo} />
                </Link>
            </div>
        )
    }

    return (
        <>
            {hasLogo && renderLogo()}
        </>
    )
}

export default Logo;