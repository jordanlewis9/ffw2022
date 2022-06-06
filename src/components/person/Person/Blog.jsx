import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import * as styles from './blog.module.scss';

const Blog = ({ blog }) => {
    const [blogDate, setBlogDate] = useState(null);

    useEffect(() => {
        const blogDateObject = new Date(blog.date);
        const blogDateOptions = { year: "numeric", month: "2-digit", day: "2-digit" }
        setBlogDate(blogDateObject.toLocaleDateString('en-US', blogDateOptions).replaceAll('/', '.'));
    }, [blog])

    return (
        <div className={`col-md-6 ${styles.authorPagePostCol}`}>
            <Link className="compact-post" to={`${blog.link.replace(process.env.GATSBY_ROOT, '')}`} title={blog.title.rendered} target="_self">
                <h4 className="compact-post-title" dangerouslySetInnerHTML={{ __html: blog.title.rendered }}>
                </h4>
                <div className="compact-post-date">
                    {blogDate && blogDate}
                </div>
                <div className="compact-post-arrow"></div>
            </Link>
        </div>
    )
}

export default Blog;