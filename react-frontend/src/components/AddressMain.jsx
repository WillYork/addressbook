import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class AddressMain extends Component {
  state = {
    address: null
  };

  render() {
    const { address } = this.state;

    return (
      <div>
        {address && (
          <>
            <h2>
              {address.forename} {address.surname}
            </h2>
            <p>Address: {address.address}</p>
            <p>{address.postcode}</p>
            <p>Telephone: {address.telephone}</p>
            <p>Email: {address.email}</p>
            <p>Date of Birth: {address.date_of_birth}</p>
            <Link to="/addresses"><button>Back to Address Book</button></Link>
          </>
        )}
      </div>
    );
  }

  componentDidMount() {
    return this.fetchAddresses();
  }

  fetchAddresses = () => {
    const { id } = this.props;
    console.log(id);
    api.getAddressById(id).then(({ data: addresses }) => {
      console.log(addresses);
      this.setState({
        address: addresses[0]
      });
    });
  };
}

export default AddressMain;
