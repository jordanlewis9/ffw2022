import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import * as styles from './checklist.module.scss';

const Checklist = ({ checklist }) => {
    const [checklistItems, setChecklistItems] = useState([]);
    const [checklistTitle, setChecklistTitle] = useState(null);

    useEffect(() => {
        let savedChecklist;
        const fetchData = async () => {
            // Gathering the checklist data based on which checklist to show via API call
            try {
                const response = await axios.get(`${process.env.GATSBY_ROOT}/wp-json/wp/v2/checklist/${checklist}`);
                // Creating an object for all information related to checklist title
                setChecklistTitle({
                    title: response.data.title.rendered,
                    allVisited: false
                });
                // Calling API for page data for each page in the checklist
                const pageIds = response.data.acf['checklist_pages'];
                let retrievedPages = await Promise.all(pageIds.map(async (item) => {
                    const { data } = await axios.get(`${process.env.GATSBY_ROOT}/wp-json/wp/v2/pages/${item}`);
                    return data;
                }));
                
                // Reducing amount of properties in page object as well as customization for checklist item use
                retrievedPages = retrievedPages.map(page => {
                    let pageObject = {};
                    // There may need to be a better way to get the relative path, aside from statically replacing a static root
                    let relativePath = page.link.replace(process.env.GATSBY_ROOT, '');
                    // window.location.pathname returns either /name/ or /name. We set up the page slug to match /name/ here
                    pageObject.pageSlug = `/${page.slug}/`;
                    pageObject.visited = false;
                    pageObject.title = page.title.rendered;
                    pageObject.path = relativePath;
                    return pageObject;
                });

                setChecklistItems(retrievedPages);
            } catch (err) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(err.response.data);
                }
            }
        }

        // If statement is for Gatsby build since Storage does not exist outside of a browser environment
        if (typeof Storage !== 'undefined') {
            savedChecklist = sessionStorage.getItem(`${checklist}`);
        }

        // If we've already downloaded the checklist, we don't have to make the 6 API calls and can just save both title objects
        // and item objects to state, where we can then modify them
        if (savedChecklist) {
            savedChecklist = JSON.parse(savedChecklist);
            setChecklistItems(savedChecklist.checklist);
            setChecklistTitle(savedChecklist.title);
        } else {
            fetchData();
        }
    }, []);

    const updateTitle = (checklistArray) => {
        if (checklistTitle.allVisited === true) {
            return true;
        }

        return checklistArray.every(item => item.visited === true);
    }

    const updateChecklist = () => {
        let updatedChecklist = checklistItems.map(item => {
            // If statement is for Gatsby build, since window does not exist outside of the browser
            if (typeof window !== 'undefined') {
                // Pathname can either return with slashes on both ends, or just one, and both are valid.
                if (`${window.location.pathname}/` === `${item.pageSlug}` || `${window.location.pathname}` === `${item.pageSlug}`) {
                    item.visited = true;
                }
            }
            return item;
        });

        let checklistTitleObject = {
            title: checklistTitle.title,
            allVisited: updateTitle(updatedChecklist)
        }

        let checklistObject = {
            title: checklistTitleObject,
            checklist: updatedChecklist
        };

        // If statement is for Gatsby build, since Storage does not exist outside of the browser
        if (typeof Storage !== 'undefined') {
            sessionStorage.setItem(`${checklist}`, JSON.stringify(checklistObject));
        }

        return [updatedChecklist, checklistTitleObject];
    }

    const renderChecklist = () => {
        let [updatedChecklist, checklistTitleObject] = updateChecklist();

        updatedChecklist = updatedChecklist.map(item => {
            if (item.visited === true) {
                return (
                    <li className={styles.checked} key={item.path}>
                        <Link to={item.path} className={styles.pageHeaderChecklistItem}>
                            <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                        </Link>
                    </li>
                )
            } else {
                return (
                    <li key={item.path}>
                        <Link to={item.path} className={styles.pageHeaderChecklistItem}>
                            <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                        </Link>
                    </li>
                )
            }
        });

        return (
            <>
                <div className={styles.pageHeaderChecklistTitleWrap}>
                    <div className={`${styles.pageHeaderChecklistTitle} h3`}>
                        {checklistTitleObject.title}
                    </div>
                    <div className={`${styles.pageHeaderChecklistCheck} ${checklistTitleObject.allVisited === true ? styles.pageHeaderChecklistCheckChecked : ''}`} id="checklist-check"></div>
                </div>
                <ul className={styles.pageHeaderChecklistList}>{updatedChecklist}</ul>
            </>
        )
    }

    return (
        <div className={styles.pageHeaderChecklist}>
            {checklistItems.length > 0 && renderChecklist()}
        </div>
    )
}

export default Checklist;