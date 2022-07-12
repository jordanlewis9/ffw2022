import React from 'react';
import * as styles from './singleicon.module.scss';

const SingleIcon = ({ item }) => {
    return (
        <li className={styles.iconListListItem}>
            <div className={`${styles.iconListIcon} bg-contain`} style={{ backgroundImage: `url('${item?.icon?.sourceUrl}')` }}></div>
            {item.text}
        </li>
    )
}

export default SingleIcon;