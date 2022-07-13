import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'gatsby';
import * as styles from './portfolioitem.module.scss';

const PortfolioItem = ({ image, slug, title, isRest }) => {
    const [itemImage, setItemImage] = useState(null);
    const [itemSlug, setItemSlug] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`${process.env.GATSBY_ROOT}/wp-json/wp/v2/media?include=${image}`);
                setItemImage(data.data[0].source_url);
            } catch (err) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(err);
                }
            }
        };

        if (isRest) {
            fetchData();
            setItemSlug(slug.replace(process.env.GATSBY_ROOT, ''))
        } else {
            setItemImage(image);
            setItemSlug(slug)
        }
    }, [isRest, image]);

    return (
        <div className={styles.portfolioTextItem}>
            <Link to={itemSlug} className={`${styles.portfolioitemCompactsimple} bg-cover`} title={title} target="_self" style={{ backgroundImage: itemImage && `url('${itemImage}')`}}>
                <div className={styles.portfolioitemCompactsimpleTitle} dangerouslySetInnerHTML={{ __html: title}}></div>
            </Link> 
        </div>
    )
}

export default PortfolioItem;