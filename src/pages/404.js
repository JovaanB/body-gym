import React from "react"
import { Link } from "gatsby"

import CenteredLayout from "../components/CenteredLayout/CenteredLayout"
import awkwardKidGif from "../images/awkward-kid.gif"

import SEO from "../components/SEO/SEO"

import Button from "@material/react-button"

// Styles
import "../styles/app.scss"

const NotFoundPage = () => (
  <CenteredLayout>
    <SEO title="404: Not Found" />
    <img src={awkwardKidGif} width="300px" alt="awkward kid gif" />
    <h1>Euh... il y a une erreur...</h1>
    <p>
      Oh oh ! On dirait que l'endroit que vous cherchiez n'est plus là. il y a
      une faute de frappe. Veuillez vérifier l'URL pour voir s'il y a des
      erreurs et réessayez.{" "}
      <span role="img" aria-label="wink">
        😉
      </span>
    </p>
    <Link to="/">
      {/* // TODO add back icon */}
      <Button raised>Retour à l'accueil</Button>
    </Link>
  </CenteredLayout>
)

export default NotFoundPage
