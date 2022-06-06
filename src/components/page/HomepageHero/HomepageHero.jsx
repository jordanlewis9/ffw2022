import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './HomepageHero.module.scss';

const HomepageHero = ({ rightImage, popoutHeading, popoutContent, preheading, heading, content, solidButton, ghostButton, desktopMarginBottom }) => {
    let image;

    if (rightImage) {
        image = getImage(rightImage.localFile);
    }

    return (
        <section className={styles.homeHero} style={desktopMarginBottom ? {marginBottom: desktopMarginBottom} : {marginBottom: 0}}>
            <div className={styles.containerFluid}>
                <div className={styles.homeHeroRow}>
                    <div className={styles.homeHeroContentCol}>
                        <div className={styles.homeHeroLeft} data-aos="fade-up" data-aos-delay="500">
                            <div className={styles.homeHeroContent}>
                                <div className={styles.homeHeroHeadingWrap}>
                                    <h4 className={styles.homeHeroPreheading}>
                                        {preheading}
                                    </h4>
                                    <h1 className={styles.homeHeroHeading}> 
                                        {heading}
                                    </h1>
                                    <div className='triangles-shortcode'></div>
                                </div>
                                <div className={styles.homeHeroContentContainer} dangerouslySetInnerHTML={{ __html: content }}>
                                    
                                </div>
                            </div>
                            <div className={styles.homeHeroButtons}>
                                { solidButton ? <Link className={`${styles.homeHeroSolidButton} forefrontweb-button`} to={solidButton.url} target={solidButton.target} title={solidButton.title}><span>{solidButton.title}</span></Link> : ''}
                                { ghostButton ? <Link className={`${styles.homeHeroGhostButton} forefrontweb-button forefrontweb-button--ghost`} to={ghostButton.url} target={ghostButton.target} title={ghostButton.title}><span>{ghostButton.title}</span></Link> : ''}
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeHeroImageCol}>
                        <div className={styles.homeHeroImageWrap} data-aos="zoom-in-left">
                            {image && <GatsbyImage image={image} className={styles.homeHeroImage} alt={rightImage.altText} />}
                            <div className={styles.homeHeroPopout}>
                                <div className={styles.homeHeroPopoutHeadingwrap}>
                                    <h3 className={styles.homeHeroPopoutHeading}>
                                        {popoutHeading}
                                    </h3>
                                </div>
                                <div className={styles.homeHeroPopoutContent} dangerouslySetInnerHTML={{ __html: popoutContent}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomepageHero;