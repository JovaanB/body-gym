import React from "react"
import CenteredLayout from "../components/CenteredLayout/CenteredLayout"
import SEO from "../components/SEO/SEO"

import ContactForm from "../components/ContactForm/ContactForm"

// Styles
import "../styles/app.scss"

class About extends React.Component {
  render() {
    return (
      <CenteredLayout>
        <SEO title="Contact" />
        <h1>Contactez-nous</h1>
        <section className="page-main__section contact-page-main__section">
          <div className="anoun-contact-links__section">
            <div>
              <h3>Téléphone</h3>
              <a
                href="tel:+33760901417"
              >
                0033 (0)7.60.90.14.17
              </a>
            </div>
            <div>
              <h3>Email</h3>
              <a
                href="mailto:formasports@live.fr"
              >
                formasports@live.fr
              </a>
            </div>
            <div>
              <h3>Instagram</h3>
              <a
                href="https://www.instagram.com/body_gym59"
              >
                @body_gym59
              </a>
            </div>
          </div>
          <h3>ou envoyez-nous juste un mail ici!</h3>
          <ContactForm />
        </section>
      </CenteredLayout>
    )
  }
}

export default About
