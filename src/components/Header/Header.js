import { Link } from "gatsby"
import React, { Component } from "react"

import styles from "./header.module.scss"

class Header extends Component {
  render() {
    const ListLink = props => (
      <li>
        <Link to={props.to} activeClassName={styles.activeLink}>
          {props.children}
        </Link>
      </li>
    )
    return (
      <header className={styles.siteHeader}>
        <nav>
          <ul>
            <ListLink to={`/`}>Accueil</ListLink>
            <ListLink to={`/blog/`}>Blog</ListLink>
            <ListLink to={`/photos/`}>Photos</ListLink>
            <ListLink to={`/contact/`}>Contact</ListLink>
            <img src="/images/2.jpg" alt="BodyGym" className="anoun-title" />
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
