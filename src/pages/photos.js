import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import Lightbox from '../components/Lightbox/Lightbox'


const IndexPage = ({ data }) => (
  <Layout>
      <SEO />
        <section className="anoun-home--section1">
          <h3>Bienvenue sur le site de <span className="anoun-title">BODY-GYM </span></h3>
          </section>
      <Lightbox images={data.allImageSharp.edges} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allImageSharp {
      edges {
        node {
          sizes(maxWidth: 1800) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
