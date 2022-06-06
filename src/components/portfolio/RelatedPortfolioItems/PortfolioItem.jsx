import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './portfolioitem.module.scss';
import axios from 'axios';

const PortfolioItem = ({ item, isRest, index }) => {
    const [itemImage, setItemImage] = useState(null);
    const [itemLogo, setItemLogo] = useState(null);
    const [itemLink, setItemLink] = useState(null);

    useEffect(() => {
        const fetchFeaturedImage = async () => {
            try {
                const data = await axios.get(`${process.env.GATSBY_ROOT}/wp-json/wp/v2/media?include=${item['featured_media']}`);
                setItemImage(data.data[0].source_url);
            } catch (err) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(err.response.data);
                }
            }
        }

        const fetchLogo = async () => {
            try {
                const data = await axios.get(`${process.env.GATSBY_ROOT}/wp-json/wp/v2/media?include=${item.acf.logo}`);
                setItemLogo(data.data[0].source_url)
            } catch (err) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(err.response.data);
                }
            }
        }

        if (isRest) {
            fetchFeaturedImage();
            fetchLogo();
            setItemLink(item.link.replace(process.env.GATSBY_ROOT, ''));
        } else {
            setItemImage(item.featuredImage.node.sourceUrl);
            setItemLogo(item.portfolioItem.logo.sourceUrl);
            setItemLink(item.uri);
        }
    }, [isRest, item]);


    return (
        <div className={styles.relatedPortfolioItemsItem} data-aos="fade-up" data-aos-delay={(index + 1) * 50}>
            <Link to={itemLink} className={styles.portfolioItemCompact}>
                {itemImage && <div className={`${styles.portfolioItemCompactImage} bg-cover`} style={{ backgroundImage: `url('${itemImage}')` }}></div>}
                <span className='screen-reader-text'>{item.title.rendered}</span>
                <div className={styles.portfolioItemCompactTriangle}></div>
                {itemLogo && <div className={`${styles.portfolioItemCompactLogo} bg-contain`} style={{ backgroundImage: `url('${itemLogo}')`}}></div>}
            </Link>
        </div>
    )
}

export default PortfolioItem;