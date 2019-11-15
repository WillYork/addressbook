import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class NewEntry extends Component {
  state = {};

  render() {
    return (
      <>
        <form className="new-entry">
          First Name: <input type="text" name="forename" onChange={this.handleChange}/>
          Last Name: <input type="text" name="surname" onChange={this.handleChange}/>
          Address: <input type="text" name="address" onChange={this.handleChange}/>
          Postcode: <input type="text" name="postcode" onChange={this.handleChange}/>
          Telephone Number: <input type="text" name="telephone" onChange={this.handleChange}/>
          Email Address: <input type="text" name="email" onChange={this.handleChange}/>
          Date of birth: <input type="text" name="date_of_birth" onChange={this.handleChange}/>
          <br/>
          <input type="submit" value="Submit" disabled={!this.state.forename || !this.state.surname || !this.state.address || !this.state.address || !this.state.postcode || !this.state.telephone || !this.state.email || !this.state.date_of_birth} onClick={this.handleSubmit}/>
        </form>
        <Link to="/addresses"><button>Back to Address Book</button></Link>
      </>
    );
  }

  handleChange = e => {
    const {target} = e
    const value = target.value
    const name = target.name
    this.setState({
        [name]: value
    })
  }

  handleSubmit = e => {
      const {forename, surname, address, postcode, telephone, email, date_of_birth} = this.state
      e.preventDefault();
      api.postAddress(forename, surname, address, postcode, telephone, email, date_of_birth)
  }
}

export default NewEntry;
