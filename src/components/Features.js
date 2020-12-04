import React from 'react'
import styles from './Features.module.css'
import {AiOutlineDatabase} from 'react-icons/ai'
import {AiOutlineApple} from 'react-icons/ai'
import {AiOutlineAndroid} from 'react-icons/ai'
import {BiSmile} from 'react-icons/bi'
import {SiAddthis} from 'react-icons/si'
import {FiSettings} from 'react-icons/fi'
import {MdSignalCellularConnectedNoInternet0Bar} from 'react-icons/md'

function Features() {
    document.addEventListener('scroll', function (e) {
        var top  = window.pageYOffset + window.innerHeight,
            isVisible = top > document.querySelector(`.${styles.featuresContainer}`).offsetTop;
      
         if (isVisible) {
           document.querySelector(`.${styles.featuresContainer}`).classList.add(styles.featureAnimation);
         }
      });
    return (
        <div className={styles.featuresContainer}>
            <div className={styles.feature}>
                <div className={styles.logo}><AiOutlineDatabase/></div>
                <div>
                    <p className={styles.text}>Geniş söz bazası</p>
                </div>
            </div>

            <div className={styles.feature}>
                <div className={styles.logo}><BiSmile/></div>
                <div>
                    <p className={styles.text}>Sadə interfeys</p>
                </div>
            </div>

            <div className={styles.feature}>
                <div className={styles.logo}><SiAddthis/></div>
                <div>
                    <p className={styles.text}>Söz əlavə etmənin mümkünlüyü</p>
                </div>
            </div>

            <div className={styles.feature}>
                <div className={styles.logo}><FiSettings/></div>
                <div>
                    <p className={styles.text}>Tənzimləmələrin idarə edilə bilməsi</p>
                </div>
            </div>

            <div className={styles.feature}>
                <div className={styles.logo}><AiOutlineApple/><AiOutlineAndroid /></div>
                <div>
                    <p className={styles.text}>Hər iki platformada olması</p>
                </div>
            </div>

            <div className={styles.feature}>
                <div className={styles.logo}><MdSignalCellularConnectedNoInternet0Bar/></div>
                <div>
                    <p className={styles.text}>Internet olmadan istifadə</p>
                </div>
            </div>
            
        </div>
    )
}

export default Features
