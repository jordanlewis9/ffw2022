import React from 'react';
import Checklist from './Checklist';
import * as styles from './pageheader.module.scss';

const PageHeader = ({ pageHeader }) => {
    const { pageTitle, includeChecklist, checklistToShow } = pageHeader;
    
    return (
        <section className={`${styles.pageHeader} ${includeChecklist && styles.pageHeaderHasChecklist}`}>
            <div className="container">
                <div className="row">
                    <div className={`col-md ${styles.pageHeaderLeftColumn}`}>
                        <div className={styles.pageHeaderInner}>
                            <h1 className={styles.pageHeaderTitle}>
                                {pageTitle}
                            </h1>
                        </div>
                    </div>
                    <div className="col-md-7">
                        {includeChecklist && <Checklist checklist={checklistToShow} />}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PageHeader;