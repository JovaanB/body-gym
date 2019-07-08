import React from "react"
import TextField, {Input} from "@material/react-text-field"
import MaterialIcon from "@material/react-material-icon"
import Button from "@material/react-button"
import {Snackbar} from '@material/react-snackbar'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      open:false
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch('https://mailthis.to/Jovaan', {
      method: 'POST'
    })
      .then(this.handleSuccess)
      .catch(function(error) {
        console.error(error)
      })
  }

  handleSuccess = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: "",
      open:true
    })
  }
  render() {
    return (
      
      <form
        action="https://mailthis.to/bienvenujovan@gmail.com" method="POST" encType="multipart/form-data"
        className="anoun-contact__form"
      >
        {/* <!-- Prevent spam without a captcha --> */}
        <input
          type="checkbox"
          name="_honeypot"
          tabindex="-1"
          autocomplete="off"
          hidden
        />
        <input type="hidden" name="_confirmation" value="Votre message a été envoyé!" />
        <TextField
          label="Nom"
          leadingIcon={<MaterialIcon icon="person" />}
        >
          <Input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            required
          />
        </TextField>
        <TextField label="Email" leadingIcon={<MaterialIcon icon="email" />}>
          <Input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            required
          />
        </TextField>
        <TextField label="Telephone" leadingIcon={<MaterialIcon icon="phone" />}>
          <Input
            value={this.state.phone}
            name="phone"
            onChange={this.handleInputChange}
            required
          />
        </TextField>
        <TextField label="Message">
          <Input
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            required
          />
        </TextField>
        <Button
          type="submit"
          raised
          trailingIcon={<MaterialIcon icon="send" />}
          onClick={this.onClickSendButton}
        >
          Envoyer
        </Button>
        <Snackbar open={this.state.open} message="Envoyé! Nous vous répondrons dès que possible 😊" actionText="dismiss" />
      </form>
    )
  }
}

export default ContactForm