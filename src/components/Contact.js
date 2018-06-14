import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      comment: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit = async (event) => {
    console.log(event.target)
    event.preventDefault();

    const data = {
      "name": this.state.name,
      "email": this.state.email,
      "comment": this.state.comment,
    }
    const response = await fetch('https://formula-test-api.herokuapp.com/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    console.log(resData);
  }

  render() {
    return (
      <div className="container">
        <form className="contact-form" onSubmit={this.handleSubmit} onChange={this.handleInputChange}>
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
              <button type="submit">Submit</button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Contact;