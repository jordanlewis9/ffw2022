import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'gatsby';
import * as styles from './portfolioitem.module.scss';

const PortfolioItem = ({ image, title, slug, isRest }) => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`http://ff2022.local/wp-json/wp/v2/media?include=${image}`);
                setImageUrl(data.data[0].source_url);
            } catch (err) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(err.response);
                }
            }
        }

        if (isRest) {
            fetchData();
        } else {
            setImageUrl(image);
        }
    }, [isRest])

    return (
        <Link to={slug} className={`${styles.portfolioItemCompactSimple} bg-cover`} title={title} target="_self" style={{ backgroundImage: imageUrl && `url('${imageUrl}')`}}>
            <div className={styles.portfolioItemCompactSimpleTitle} dangerouslySetInnerHTML={{ __html: title }}></div>
        </Link>
    )
}

export default PortfolioItem;