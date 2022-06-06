import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import * as styles from './singleblog.module.scss';

const SingleBlog = ({ blog, animation }) => {
    const [featuredImage, setFeaturedImage] = useState(null);
    const [blogDate, setBlogDate] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.GATSBY_ROOT}/wp-json/wp/v2/media?include=${blog.featured_media}`);
                if (!response.length) {
                    return;
                } else {
                    setFeaturedImage(response.data[0].source_url);
                }
            } catch (err) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(err.response.data);
                }
            }
        }

        fetchData();

        const blogDateObject = new Date(blog.date);
        const blogDateOptions = { year: "numeric", month: "2-digit", day: "2-digit" }
        setBlogDate(blogDateObject.toLocaleDateString('en-US', blogDateOptions).replaceAll('/', '.'));
    }, [])

    return (
        <div className={`col-md-6 col-lg-4 ${styles.postsArchiveCompactWrap}`} data-aos={animation && animation}>
            <Link to={`/${blog.slug}`} title={blog.title.rendered} className={`${styles.compactPost} ${styles.compactPostImageLink}`}>
                <div className={`${styles.compactPostImage} bg-cover`} style={{ backgroundImage: featuredImage && `url('${featuredImage}')` }}></div>
                <div className={styles.compactPostInner}>
                    <h4 className={styles.compactPostTitle} dangerouslySetInnerHTML={{ __html: blog.title.rendered }}></h4>
                    <div className={styles.compactPostDate}>{blogDate && blogDate}</div>
                    <div className={styles.compactPostArrow}></div>
                </div>
            </Link>
        </div>
    )
}

export default SingleBlog;