import { Link } from "gatsby"
import React, { Component } from "react"
import instagramIcon from "../../images/icons/instagram-round-white-24px.svg"
import FbIcon from '../../images/icons/facebook2.png'

import styles from "./footer.module.scss"

class Footer extends Component {
  render() {
    return (
      <footer className={styles.siteFooter}>
        <nav className={styles.footerNav}>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
            <li>
              <Link to="/photos/">Photos</Link>
            </li>
            <li>
              <Link to="/about/">A propos</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.footerNav2}>
          <a
            href="https://www.instagram.com/body_gym59"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              className={styles.footerIcon}
              width="25px"
              alt="facebook-social-link"
            />
          </a>
          <a
            href="https://www.facebook.com/body.gym.73"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={FbIcon}
              className={styles.footerIcon}
              width="32px"
              alt="facebook-social-link"
            />
          </a>
        </nav>
      </footer>
    )
  }
}

export default Footer
