import React from 'react'
import styles from './Footer.module.css'
import {FaFacebookF, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className={styles.footer}>
            <h3>Contact us:</h3>
            <ul>
                <li><Link to="/" className={styles.footerLinks}><FaFacebookF /></Link></li>
                <li><Link to="/" className={styles.footerLinks}><FaInstagram /></Link></li>
                <li><Link to="/" className={styles.footerLinks}><FaWhatsapp /></Link></li>
            </ul>
        </div>
    )
}

export default Footer
