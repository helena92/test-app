import React, { Component } from 'react';
import FormErrors from './FormErrors';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      comment: '',
      formErrors: { email: '' },
      emailValid: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;

    if ((fieldName) === 'email') {
      emailValid = value.match(/^[\w.%+-]+@[\w-]+\.+[\w]{2,}$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      name: this.state.name,
      comment: this.state.comment
    }
    const response = await fetch('https://formula-test-api.herokuapp.com/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    console.log(resData);

    this.setState({
      email: '',
      name: '',
      comment: ''
    });
  }

  render() {
    return (
      <div className="contact-container">
        <form className="contact-form" onSubmit={this.handleSubmit} onChange={this.handleInputChange}>
          <div className="form-error-panel">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <ul>
            <li>
              <label>
                Name:
          <input name="name" type="text" value={this.state.name} />
              </label>
            </li>
            <li>
              <label>
                Email:
          <input name="email" type="text" value={this.state.email} />
              </label>
            </li>
            <li>
              <label>
                Comment:
          <textarea name="comment" value={this.state.comment} />
              </label>
            </li>
            <li>
              <button type="submit" disabled={!this.state.emailValid}>Submit</button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Contact;